import { GraphQLBoolean, GraphQLFieldConfig } from 'graphql'
import { IContext } from '@root/graphql/types'

export interface IArgs {
  
}

export default {
  type: GraphQLBoolean,
  description: 'Logout the current user',
  resolve: async (parent, args, { req }) => {
    try {
      req.logout()
      return true
    } catch (error) {
      return false
    }
  },
} as GraphQLFieldConfig<unknown, IContext, IArgs>