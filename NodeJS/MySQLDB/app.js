const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

const router = require('./routes/user.js')

app.use(router);

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(bodyParser.json());

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