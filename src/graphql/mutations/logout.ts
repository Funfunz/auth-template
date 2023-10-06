import { GraphQLBoolean, GraphQLFieldConfig } from '@funfunz/core/lib/index.js'
import { IContext } from '../types.js'
import logger from '../../setup/logger.js'

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