// server.js purpose is to activate the NodeJS server on a specified port.

// 1 - First step from app.
var app = require('./app');
var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Server running on port '+ port);
});