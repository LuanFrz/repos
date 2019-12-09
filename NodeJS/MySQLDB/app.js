// npm install express-rate-limit
// npm install xss-clean 
// npm install bcrypt *

const express = require('express');
const rateLimit = require("express-rate-limit");
const xss = require('xss-clean');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

const router = require('./routes/user.js')

app.use(xss());

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(bodyParser.json());

// Prevents DOS attacks by limiting body payload and the number of requests permited by user.
app.use(express.json({ limit: '4kb' }));
const limit = rateLimit({
    max: 50,
    windowMs: 30 * 60 * 1000,
    message: 'Too many requests in a short time window.'
});
app.use('/user_create', limit);
app.use('/users', limit);
app.use('/user/:id', limit);

app.use(router);

// Makes it so the app serves the files located in /public.
app.use(express.static('./public'));

app.use(morgan('short'));

app.get("/", (req, res) => {
    console.log("Response to route ");
    res.send("Hello")
});

var port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log("Server is running on port "+ port);
});
