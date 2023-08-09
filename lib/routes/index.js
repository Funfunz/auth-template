import { Router } from 'express';
import logger from '../setup/logger.js';
import { funfunz } from '../index.js';
import loginRouter from './login.js';
import wwwRouter from './www.js';
const log = logger('routes');
export function generateRouter() {
    log('start');
    const router = Router();
    log('router created');
    router.get('/health', (req, res) => {
        res.end();
    });
    router.use('/graphql', funfunz.middleware);
    router.use(loginRouter);
    router.use(wwwRouter);
    log('end');
    return router;
}
