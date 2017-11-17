// var webpackDevServer = require('webpack-dev-server');
require('dotenv').config();
let opn =require('opn');
let chalk = require('chalk');

let log = console.log;
let port = process.env.MY_PORT;
let url ="http://localhost:" + port +"/";


log(chalk.green('devployment Started'));
log(chalk.green('url = ',url ));


opn(url, { app: 'chrome', });

