import { GraphQLFieldConfig } from '@funfunz/core/lib/index.js'
import login, {IArgs as LoginArgs} from './login.js'
import logout, {IArgs as LogoutArgs} from './logout.js'
import requestResetPassword from './requestResetPassword.js'
import resetPassword from './resetPassword.js'
import { IContext } from '../types.js'

const mutations: {
  login: GraphQLFieldConfig<unknown, IContext, LoginArgs>;
  logout: GraphQLFieldConfig<unknown, IContext, LogoutArgs>;
  requestResetPassword: GraphQLFieldConfig<any, any>;
  resetPassword: GraphQLFieldConfig<any, any>;
} = {
  login,
  logout,
  requestResetPassword,
  resetPassword,
}

export default mutations