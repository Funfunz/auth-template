import http from 'http'
import logger from './logger.js'
import { express } from '../index.js'
import { normalizePort } from '../utils/normalizePort.js'

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

export function generateServer() {
  const httpServer = http.createServer(express)
  
  httpServer.on('error', onError)
  httpServer.on('listening', onListening(httpServer))

  httpServer.listen(normalizePort())
  log('server created')

}
