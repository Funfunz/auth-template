import { Router } from 'express'
import logger from '@root/setup/logger'

import graphqlRouter from '@root/routes/graphql'

const log = logger('routes')
log('start')

const router = Router()
log('router created')

export default router

router.use('/graphql', graphqlRouter)

log('end')