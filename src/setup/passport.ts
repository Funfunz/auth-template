import passport from 'passport'
import { IUser } from '@root/models/users'
import * as userController from '@root/controllers/user'

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

export default passport