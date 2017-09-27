// var webpackDevServer = require('webpack-dev-server');
require('dotenv').config();
var opn =require('opn');
var chalk = require('chalk');

var log = console.log;
var port = process.env.MY_PORT;
var url ="http://localhost:" + port +"/";


log(chalk.green('devployment Started'));
log(chalk.red('url = ',url ));


opn(url, { app: 'chrome', });

