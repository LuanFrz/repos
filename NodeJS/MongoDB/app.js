// app.js only purpose is to configure the application!

const express = require('express');
var app = express();
var db = require('./db');
var userController = require('./user/userController');

app.use('/users', userController);

module.exports = app;