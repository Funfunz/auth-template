import { GraphQLFieldConfig } from '@funfunz/core/lib/index.js';
import { IContext } from '../types.js';
export interface IArgs {
    id: number;
    password: string;
    hash: string;
}
declare const _default: GraphQLFieldConfig<unknown, IContext, IArgs>;
export default _default;
