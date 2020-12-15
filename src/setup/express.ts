import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import morgan from 'morgan'
import passport from '@root/setup/passport'
import logger from '@root/setup/logger'
import routes from '@root/routes/index'

const log = logger('setup/express')
log('start')

const { SERVER_SESSION_SECRET = 'keyboard cat' } = process.env

const app = express()

app.use(morgan('dev') as express.Handler)

// cookies
app.set('trust proxy', 1)
app.use(cookieSession({
  secret: SERVER_SESSION_SECRET,
}))

app.use(bodyParser.json())
// server.use(bodyParser.urlencoded({ extended: false }))

app.use(passport.initialize());
app.use(passport.session());

app.use(routes)

log('end')

export default app