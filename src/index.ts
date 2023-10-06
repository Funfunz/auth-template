// setup dotenv
import './setup/dotenv.js'

// setup http server
import { generateServer } from './setup/httpServer.js'
// setup funfunz
import { generateFunfunz } from './setup/funfunz.js'
// setup passport
import { generatePassport } from './setup/passport.js'
// setup express
import { generateExpress } from './setup/express.js'
import { Funfunz } from '@funfunz/core/lib/index.js'
import type { Express } from 'express'


export const passport = generatePassport()
export let funfunz: Funfunz
export let express: Express

generateFunfunz().then(
  (funfunzInstance) => {
    funfunz = funfunzInstance
    express = generateExpress()
    generateServer()
  }
)