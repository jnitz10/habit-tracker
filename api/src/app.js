const express = require('express')
const cors = require('cors')
require('./db/mongoose.js')
const habitRouter = require('./routers/habit')
const userRouter = require('./routers/user')
const corsOrigin = process.env.CLIENT_ORIGIN

const app = express()
app.use(cors({
  origin: corsOrigin
}))



app.use(express.json())
app.use(habitRouter)
app.use(userRouter)

module.exports = app
