const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/whatsAppUsersDB')
const db = mongoose.connection
console.log("db connected !")