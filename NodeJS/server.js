// server.js purpose is to activate the NodeJS server on a specified port.

var app = require('./app');
var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Server running on port ' + port);
});