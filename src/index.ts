// setup @root import alias
import { addAliases } from 'module-alias'
addAliases({
  '@root': __dirname
})

// setup dotenv
import '@root/setup/dotenv'

// setup http server
import '@root/setup/httpServer'