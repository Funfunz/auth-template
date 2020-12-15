import { Router } from 'express'
import logger from '@root/setup/logger'

import funfunz from '@root/funfunz'

const log = logger('routes')
log('start')

const router = Router()
log('router created')

export default router

// routes
router.use('/', funfunz.middleware)

log('end')