import { GraphQLBoolean, GraphQLFieldConfig, GraphQLInt, GraphQLString } from '@funfunz/core/lib/index.js'
import * as userController from '@root/controllers/user'
import logger from '@root/setup/logger'
import { IContext } from '@root/graphql/types'
import sha512 from '@root/utils/sha512'

export interface IArgs {
  id: number
  password: string
  hash: string
}

const log = logger('graphql/mutations/resetPassword')

export default {
  type: GraphQLBoolean,
  description: 'Reset password',
  args: {
    id: {
      type: GraphQLInt
    },
    hash: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  },
  resolve: async (parent, args) => {
    try {
      log('resolver')
      const user = await userController.getById(args.id)
      log(user)
      const calculatedHash = sha512(user.password)
      const receivedHash = args.hash
      if (calculatedHash === receivedHash) {
        const updatedUser = {
          password: sha512(args.password)
        }
        log('updating password')
        await userController.updateById(args.id, updatedUser)
        log('password updated')
        return true
      } 
      return false
    } catch (error) {
      log('error')
      log(error)
      return false
    }
  },
} as GraphQLFieldConfig<unknown, IContext, IArgs>