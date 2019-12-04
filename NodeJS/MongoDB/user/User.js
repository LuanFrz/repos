// User.js purpose is to create a user model for the database.

const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');