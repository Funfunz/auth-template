// setup @root import alias
import { addAliases } from 'module-alias'
addAliases({
  '@root': __dirname
})
// setup dotenv
import '@root/setup/dotenv'

// setup http server
import { generateServer } from '@root/setup/httpServer'
// setup funfunz
import { generateFunfunz } from '@root/setup/funfunz'
// setup passport
import { generatePassport } from '@root/setup/passport'
// setup express
import { generateExpress } from '@root/setup/express'
import { Funfunz } from '@funfunz/core'
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