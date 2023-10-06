import { Router } from 'express'
import logger from '../setup/logger.js'
import { funfunz } from '../index.js'
import loginRouter from './login.js'
import wwwRouter from './www.js'
import path from 'path'
import { fileURLToPath } from 'url'

const log = logger('routes')
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function generateRouter(): Router {
  log('start')
  const router = Router()
  log('router created')

  router.get('/health', (req, res) => {
    res.end()
  })
  router.use(
    '/graphiql',
    (req, res) => {
      res.sendFile(path.join(__dirname, '../../static/graphiql.html'));
    }
  )
  router.use('/graphql', funfunz.middleware)
  router.use(loginRouter)
  router.use(wwwRouter)

  log('end')
  return router
}
