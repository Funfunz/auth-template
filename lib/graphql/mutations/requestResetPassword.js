import { GraphQLBoolean, GraphQLString } from '@funfunz/core/lib/index.js';
import * as userController from '../../controllers/user.js';
import logger from '../../setup/logger.js';
import * as mailService from '../../services/mail/index.js';
import sha512 from '../../utils/sha512.js';
const log = logger('graphql/mutations/requestResetPassword');
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
            log('resolver');
            const { email } = args;
            log(email);
            const user = await userController.getByEmail(email);
            const hash = sha512(user.password);
            const params = {
                resetLink: `${process.env.PUBLIC_URL}/#/resetPassword?hash=${hash}`
            };
            log('sending reset password email');
            await mailService.sendWithTemplate('resetPassword', email, params);
            log('sent');
            return true;
        }
        catch (error) {
            log('error');
            log(error);
            return false;
        }
    },
};
