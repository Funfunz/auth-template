import { GraphQLInt, GraphQLObjectType, GraphQLString } from '@funfunz/core/lib/index.js';
import logger from '@root/setup/logger';
const log = logger('graphql/queries/me');
log('start');
export default {
    type: new GraphQLObjectType({
        name: 'Me',
        fields: () => {
            return {
                id: {
                    type: GraphQLInt
                },
                name: {
                    type: GraphQLString
                },
                email: {
                    type: GraphQLString
                }
            };
        }
    }),
    description: 'Return current user',
    args: {},
    resolve: async (parent, args, { req }) => {
        log('resolver');
        return req.user;
    },
};
