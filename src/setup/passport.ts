import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { IUser } from '@root/models/users'
import * as userController from '@root/controllers/user'

const config = {
  usernameField: 'email',
  passwordField: 'password'
}

passport.use(new LocalStrategy(config, (email, password, done) => {
  userController.login(email, password).then((user) => {
    done(null, user)
  }).catch((error) => {
    done(error)
  })
}))

passport.serializeUser((user: IUser, done) => {
  done(null, user.id)
})

passport.deserializeUser((id: string | number, done) => {
  userController.getById(id).then((user) => {
    done(null, user)
  }).catch((error) => {
    done(error)
  })
})

export default passport