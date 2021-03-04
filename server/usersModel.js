const mongoose = require('mongoose')
let Schema = mongoose.Schema
let UserSchema = new Schema({
    Name: String,
    Phone: Number
});

module.exports = mongoose.model('users', UserSchema)
