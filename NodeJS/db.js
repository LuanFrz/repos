// db.js purpose is to specify the connection to the database.

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://NodeJS-API:potastic@cluster-nep6i.gcp.mongodb.net/test?retryWrites=true&w=majority');