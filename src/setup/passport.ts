import passport from 'passport'
import { IProfile, OIDCStrategy, VerifyCallback } from 'passport-azure-ad'
import { IUser } from '@root/models/users'
import * as userController from '@root/controllers/user'

export function generatePassport() {
  
  passport.serializeUser((user: IUser, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id: string | number, done) => {
    userController.getById(id).then((user) => {
      delete user.password
      done(null, user)
    }).catch((error) => {
      done(error)
    })
  })

  passport.use(new OIDCStrategy({
    clientID: process.env.OAUTH_CLIENT_ID as string,
    clientSecret: process.env.OAUTH_CLIENT_SECRET as string,
    responseType: 'code', 
    responseMode: 'form_post', 
    identityMetadata: '',
    passReqToCallback: false,
    redirectUrl: process.env.OAUTH_REDIRECT_URL as string,
  },
  (profile: IProfile, done: VerifyCallback) => {
    const userId = profile.oid
    if (!userId) {
      return done(new Error("No oid found"), null)
    }
    try {
      let user = userController.getById(userId)
      if (!user) {
        user = userController.createUser({
          id: userId,
          name: profile.displayName as string,
          email: profile.emails[0],
        })
      }
      done(null, user)
    } catch (error) {
      done(error)
    }
  }))

  return passport
}
