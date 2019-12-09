// db.js only purpose is to specify the connection to the database.

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://NodeJS_API:Potastic@cluster0-cgdrx.gcp.mongodb.net/test?retryWrites=true&w=majority',{
     useNewUrlParser: true, useUnifiedTopology: true });
