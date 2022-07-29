const express = require('express')
require('./db/mongoose.js')
const habitRouter = require('./routers/habit')

const app = express()

app.use(express.json())
app.use(habitRouter)

module.exports = app
