import { GraphQLFieldConfig } from '@funfunz/core/lib/index.js';
import { IArgs as LoginArgs } from './login.js';
import { IArgs as LogoutArgs } from './logout.js';
import { IContext } from '../types.js';
declare const mutations: {
    login: GraphQLFieldConfig<unknown, IContext, LoginArgs>;
    logout: GraphQLFieldConfig<unknown, IContext, LogoutArgs>;
    requestResetPassword: GraphQLFieldConfig<any, any>;
    resetPassword: GraphQLFieldConfig<any, any>;
};
export default mutations;
