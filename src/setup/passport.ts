import passport from 'passport'
import { IUser } from '@root/models/users'
import * as userController from '@root/controllers/user'

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

  return passport
}
