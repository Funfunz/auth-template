import http from 'http'
import logger from '@root/setup/logger'
import { normalizePort } from '@root/utils/normalizePort'
import type { Express } from 'express'

const log = logger('setup/http')

function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }
  switch (error.code) {
    case 'EACCES':
      log('Port requires elevated privileges')
      process.exit(1)
      break;
    case 'EADDRINUSE':
      log('Port is already in use')
      process.exit(1)
      break;
    default:
      throw error
  }
}

function onListening(httpServer: http.Server) {
  return () => {
    const addr = httpServer.address()
    const bind = typeof addr === 'string'
      ? `pipe ${addr}`
      : `port ${addr?.port}`
    log(`listening on ${bind}`)
  }
}

export function generateServer(expressApplication: Express) {
  const expressApp = expressApplication
  
  const httpServer = http.createServer(expressApp)
  
  httpServer.on('error', onError)
  httpServer.on('listening', onListening(httpServer))

  httpServer.listen(normalizePort())
  log('server created')

}
