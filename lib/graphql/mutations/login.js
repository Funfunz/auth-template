import { GraphQLBoolean, GraphQLString } from '@funfunz/core/lib/index.js';
import * as userController from '../../controllers/user.js';
import logger from '../../setup/logger.js';
import sha512 from '../../utils/sha512.js';
const log = logger('graphql/mutations/login');
log('start');
export default {
    type: GraphQLBoolean,
    description: 'Login the user using username and password',
    args: {
        email: {
            type: GraphQLString
        },
        password: {
            type: GraphQLString
        }
    },
    resolve: async (parent, args, { req }) => {
        try {
            const { email, password } = args;
            const user = await userController.getByEmail(email);
            if (user && user.email && user.password) {
                const calculatedHash = sha512(password);
                if (calculatedHash === user.password) {
                    await new Promise((resolve) => {
                        req.login(user, resolve);
                    });
                    return true;
                }
            }
            return false;
        }
        catch (error) {
            log(error);
            return false;
        }
    },
};
