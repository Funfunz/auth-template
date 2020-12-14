import http from 'http'
import logger from 'setup/logger'
import expressApp from 'setup/express'

const log = logger('setup/http')

const { SERVER_PORT = 3001 } = process.env
expressApp.set('port', Number(SERVER_PORT))

const httpServer = http.createServer(expressApp)
httpServer.listen(Number(SERVER_PORT))
export default httpServer
log('server created')

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

function onListening() {
  const addr = httpServer.address()
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr?.port}`
  log(`listening on ${bind}`)
}

httpServer.on('error', onError)
httpServer.on('listening', onListening)