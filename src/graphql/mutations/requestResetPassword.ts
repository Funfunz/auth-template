import { GraphQLBoolean, GraphQLFieldConfig, GraphQLString } from 'graphql'
import * as userController from '@root/controllers/user'
import logger from '@root/setup/logger'
import { IContext } from '@root/graphql/types'
import * as mailService from '@root/services/mail'
import sha512 from '@root/utils/sha512'

export interface IArgs {
  email: string
}

const log = logger('graphql/mutations/requestResetPassword')

export default {
  type: GraphQLBoolean,
  description: 'Reset password',
  args: {
    email: {
      type: GraphQLString
    }
  },
  resolve: async (parent, args) => {
    try {
      log('resolver')
      const { email } = args
      log(email)
      const user = await userController.getByEmail(email)
      const hash = sha512(user.password)
      const params = {
        resetLink: `${process.env.SERVER_PUBLIC_URL}/#/resetPassword?hash=${hash}`
      }
      log('sending reset password email')
      await mailService.sendWithTemplate('resetPassword', email, params)
      log('sent')
      return true
    } catch(error) {
      log('error')
      log(error)
      return false
    }
  },
} as GraphQLFieldConfig<unknown, IContext, IArgs>