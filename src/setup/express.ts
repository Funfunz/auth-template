import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import morgan from 'morgan'
import cors from 'cors'
import { passport } from '@root/index'
import logger from '@root/setup/logger'
import { generateRouter } from '@root/routes/index'
import type { Express } from 'express'
import { normalizePort } from '@root/utils/normalizePort'

const log = logger('setup/express')

export function generateExpress (): Express {
  log('start')
  const { SESSION_SECRET = 'keyboard cat' } = process.env

  const application = express()
  application.set('port', normalizePort())
  application.set('trust proxy', 1)
  
  application.use([
    morgan('dev') as express.Handler,
    cors({
      origin: process.env.CORS_WHITELIST?.split(',') || '*',
      credentials: true,
    }),
    cookieSession({
      secret: SESSION_SECRET,
    }),
    bodyParser.json(),
    passport.initialize(),
    passport.session(),
    generateRouter()
  ])

  log('end')
  return application
}
