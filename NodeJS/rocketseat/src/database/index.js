const mongoose = require("../database");

mongoose.connect("mongodb+srv://NodeJS_API:Potastic@cluster0-cgdrx.gcp.mongodb.net/test?retryWrites=true&w=majority", { useMongoClient: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;