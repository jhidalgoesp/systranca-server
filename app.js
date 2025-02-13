const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')

const config = require('./config')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const doorRouter = require('./routes/door')
const authRouter = require('./routes/auth')

const app = express()

const connectUri = `mongodb://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}?authSource=admin&w=1`

mongoose.connect(
  connectUri,
  { useNewUrlParser: true }
)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(expressValidator())

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/door', doorRouter)
app.use('/api/auth', authRouter)

module.exports = app
