require('./configs/database')
var express = require('express')
var cors = require('cors')

const usersRouter = require('./routes/usersRouter')

var app = express()
app.use(cors())

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())

app.use('/', require('./routes/usersRouter'))
app.listen(8000)
console.log("server is running..")