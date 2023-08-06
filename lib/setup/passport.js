import passport from 'passport';
import OAuth2Strategy from 'passport-oauth2';
import * as userController from '../controllers/user.js';
export function generatePassport() {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        userController.getById(id).then((user) => {
            if (user) {
                delete user.password;
            }
            done(null, user);
        }).catch((error) => {
            done(error);
        });
    });
    passport.use(new OAuth2Strategy({
        authorizationURL: process.env.OAUTH_AUTHORIZATION_URL,
        tokenURL: process.env.OAUTH_TOKEN_URL,
        clientID: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        callbackURL: process.env.OAUTH_CALLBACK_URL,
        scope: 'user.read',
    }, function (accessToken, refreshToken, profile, cb) {
        const email = profile.unique_name;
        try {
            let user = userController.getByEmail(email);
            if (!user) {
                user = userController.createUser({
                    name: profile.displayName,
                    email: profile.unique_name,
                });
            }
            cb(null, user);
        }
        catch (error) {
            throw error;
        }
    }));
    return passport;
}
