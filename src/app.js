const express = require('express')
require('./db/mongoose.js')
const habitRouter = require('./routers/habit')
const userRouter = require('./routers/user')

const app = express()

app.use(express.json())
app.use(habitRouter)
app.use(userRouter)

module.exports = app
