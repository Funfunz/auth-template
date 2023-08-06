"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.express = exports.funfunz = exports.passport = void 0;
// setup @root import alias
const module_alias_1 = require("module-alias");
(0, module_alias_1.addAliases)({
    '@root': __dirname
});
// setup dotenv
require("@root/setup/dotenv");
// setup http server
const httpServer_1 = require("@root/setup/httpServer");
// setup funfunz
const funfunz_1 = require("@root/setup/funfunz");
// setup passport
const passport_1 = require("@root/setup/passport");
// setup express
const express_1 = require("@root/setup/express");
exports.passport = (0, passport_1.generatePassport)();
(0, funfunz_1.generateFunfunz)().then((funfunzInstance) => {
    exports.funfunz = funfunzInstance;
    exports.express = (0, express_1.generateExpress)();
    (0, httpServer_1.generateServer)();
});
