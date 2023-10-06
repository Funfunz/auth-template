import passport from 'passport'
import OAuth2Strategy from 'passport-oauth2'
import type { IUser } from '../models/users.js'
import * as userController from '../controllers/user.js'

export function generatePassport() {
  passport.serializeUser((user: unknown, done) => {
    done(null, (user as IUser).id)
  })

  passport.deserializeUser((id: string | number, done) => {
    userController.getById(id).then((user) => {
      if (user) {
        delete user.password
      }
      done(null, user)
    }).catch((error) => {
      done(error)
    })
  })

  passport.use(new OAuth2Strategy(
    {
      authorizationURL: process.env.OAUTH_AUTHORIZATION_URL as string,
      tokenURL: process.env.OAUTH_TOKEN_URL as string,
      clientID: process.env.OAUTH_CLIENT_ID as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
      callbackURL: process.env.OAUTH_CALLBACK_URL as string,
      scope: 'user.read',
    },
    function(accessToken: string, refreshToken: string, profile: any, cb: (err: Error | null, data: {}) => void) {
      const email = profile.unique_name
      try {
        let user = userController.getByEmail(email)
        if (!user) {
          user = userController.createUser({
            name: profile.displayName as string,
            email: profile.unique_name,
          })
        }
        cb(null, user)
      } catch (error) {
        throw error
      }
    }
  ))

  return passport
}
