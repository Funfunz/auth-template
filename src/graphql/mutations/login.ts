import { GraphQLBoolean, GraphQLFieldConfig, GraphQLString } from 'graphql'
import * as userController from '@root/controllers/user'
import logger from '@root/setup/logger'
import { IContext } from '@root/graphql/types'
import sha512 from '@root/utils/sha512'

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
      const user = await userController.getByEmail(email)
      log(user)
      if (user && user.email && user.password) {
        const calculatedHash = sha512(args.password)
        if (calculatedHash === user.password) {
          await new Promise((resolve) => {
            req.login(user, resolve)
          })
          return true
        }
      }
      log('login false')
      return false
    } catch (error) {
      log('error')
      log(error)
      return false
    }
  },
} as GraphQLFieldConfig<unknown, IContext, IArgs>