// ?????????????????????????????????????????????????????????
// ?????????????????? Morgan Handler ???????????????????????
// ?????????????????????????????????????????????????????????
 
// ??????????????????? Vendor Modules ??????????????????????
const chalk = require('chalk');
const morgan = require('morgan');
 
// ~~ Morgan Function
const morganMiddleware = morgan(function (tokens, req, res) {
    return [
        chalk.blue.bold.inverse(req.appName),
        chalk.blue.bold.inverse(' -- '),
        chalk.blue.bold.inverse(tokens.method(req, res)),
        chalk.blue.bold.inverse(' -- '),
        chalk.blue.bold.inverse(tokens.status(req, res)),
        chalk.blue.bold.inverse(' -- '),
        chalk.blue.bold.inverse(tokens.url(req, res)),
        chalk.blue.bold.inverse(' -- '),
        chalk.blue.bold.inverse(tokens['response-time'](req, res), 'ms')
    ].join('');
});

module.exports = morganMiddleware;