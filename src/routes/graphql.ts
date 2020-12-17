import { Router } from 'express'
import logger from '@root/setup/logger'

import funfunz from '@root/setup/funfunz'

const log = logger('routes/graphql')
log('start')

const router = Router()
log('router created')

export default router

// graphql route
router.use(funfunz.middleware)

log('end')