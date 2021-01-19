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
// setup express
import { generateExpress } from '@root/setup/express'

export const funfunz = generateFunfunz()
export const express = generateExpress()
export const server = generateServer(express)