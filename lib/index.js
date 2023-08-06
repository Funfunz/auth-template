// setup @root import alias
import { addAliases } from 'module-alias';
addAliases({
    '@root': __dirname
});
// setup dotenv
import './setup/dotenv';
// setup http server
import { generateServer } from './setup/httpServer.js';
// setup funfunz
import { generateFunfunz } from './setup/funfunz.js';
// setup passport
import { generatePassport } from './setup/passport.js';
// setup express
import { generateExpress } from './setup/express.js';
export const passport = generatePassport();
export let funfunz;
export let express;
generateFunfunz().then((funfunzInstance) => {
    funfunz = funfunzInstance;
    express = generateExpress();
    generateServer();
});
