var express = require('express');
var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var chalk = require('chalk');
var opn = require('opn');
require('dotenv').config();
// const { spawn } = require('child_process');

//  var Proc = require('child_process');

let log =console.log;
var app = express();

var compiler = webpack(config);
app.use(webpackDevMiddleware(  compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));


app.use(express.static('./dist'));

app.use('/', function (req, res) {
  res.sendFile(path.resolve('index.html'));
});

app.use('http://localhost:9000/TestPromise', function (req, res) {
  res.sendFile(path.resolve('index.html'));
});

var port = process.env.MY_PORT;
let serverUrl = "http://localhost:" + port;

app.listen(port, function (error) {
  if (error) throw error;
  log(chalk.cyan("Express server listening on port", port));
  opn(serverUrl,{app: 'chrome',});
  // opn("http://localhost:3000/",{app: 'chrome',});
  // console.log("Express server listening on port", port);
  // childProc
  // Proc.spawn("C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",["http://localhost:3000"],{})
});


