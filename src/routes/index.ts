import { Router } from 'express'
import logger from '@root/setup/logger'
import { funfunz } from '@root/index'

const log = logger('routes')


export function generateRouter(): Router {
  log('start')
  const router = Router()
  log('router created')

  router.get('/health', (req, res) => {
    res.end()
  })
  router.use('/graphql', funfunz.middleware)

  log('end')
  return router
}