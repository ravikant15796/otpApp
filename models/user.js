var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    phoneNumber : Number,
    message : []
});

var User = mongoose.model('User',UserSchema);
module.exports = {User};