import { Router } from 'express';
import logger from '@root/setup/logger';
import { funfunz } from '@root/index';
import loginRouter from '@root/routes/login';
import wwwRouter from '@root/routes/www';
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
