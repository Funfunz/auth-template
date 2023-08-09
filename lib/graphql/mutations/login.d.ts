import { GraphQLFieldConfig } from '@funfunz/core/lib/index.js';
import { IContext } from '../types.js';
export interface IArgs {
    email: string;
    password: string;
    [key: string]: any;
}
declare const _default: GraphQLFieldConfig<unknown, IContext, IArgs>;
export default _default;
