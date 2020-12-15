import { GraphQLBoolean, GraphQLFieldConfig } from 'graphql'
import { IContext } from '@root/graphql/types'
import logger from '@root/setup/logger'

export interface IArgs {}

const log = logger('graphql/mutations/logout')

export default {
  type: GraphQLBoolean,
  description: 'Logout the current user',
  resolve: async (parent, args, { req }) => {
    try {
      log('resolver')
      req.logout()
      return true
    } catch (error) {
      return false
    }
  },
} as GraphQLFieldConfig<unknown, IContext, IArgs>