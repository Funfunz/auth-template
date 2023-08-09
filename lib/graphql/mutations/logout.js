import { GraphQLBoolean } from '@funfunz/core/lib/index.js';
import logger from '../../setup/logger.js';
const log = logger('graphql/mutations/logout');
export default {
    type: GraphQLBoolean,
    description: 'Logout the current user',
    resolve: async (parent, args, { req }) => {
        try {
            log('resolver');
            req.logout();
            return true;
        }
        catch (error) {
            return false;
        }
    },
};
