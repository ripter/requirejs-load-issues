#!/usr/bin/env node
/*global require, console, __dirname, process */


var express = require('express');
var portfinder = require('portfinder');

var pubDir = __dirname + '/..';
var app = express();

app.use('/', express.static(pubDir));


portfinder.basePort = 8080;
portfinder.getPort(function (err, port) {
    if (err) throw err;
    app.listen(port, function () {
        console.log('listening on port: ' + port);
    });
});

process.on('SIGINT', function () {
    console.log('http-server stopped.');
    process.exit();
});