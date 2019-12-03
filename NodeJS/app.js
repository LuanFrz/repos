// app.js only purpose is to configure the application!

var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;