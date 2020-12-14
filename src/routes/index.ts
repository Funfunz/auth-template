import { Router } from 'express'
import logger from 'setup/logger'

const log = logger('routes')
log('start')

const router = Router()
log('router created')

export default router

// routes
router.get('/', (req, res) => {
  res.send('Hello world!')
})

log('end')