import { GraphQLBoolean, GraphQLFieldConfig, GraphQLString } from 'graphql'
import * as userController from '@root/controllers/user'
import logger from '@root/setup/logger'
import { IContext } from '@root/graphql/types'

export interface IArgs {
  email: string
  password: string
}

const log = logger('graphql/mutations/login')
log('start')

export default {
  type: GraphQLBoolean,
  description: 'Login the user using username and password',
  args: {
    email: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  },
  resolve: async (parent, args, { req }) => {
    try {
      log('resolver')
      const { email, password } = args
      log({ email, password })
      const user = await userController.login(email, password)
      log(user)
      if (user && user.email) {
        log('login true')
        await new Promise((resolve) => {
          req.login(user, resolve)
        })
        return true
      } else {
        log('login false')
        return false
      }
    } catch (error) {
      log('error')
      log(error)
      return false
    }
  },
} as GraphQLFieldConfig<unknown, IContext, IArgs>