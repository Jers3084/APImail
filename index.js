const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mailRouter = require('./routes/mailRouter.js')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/sendmail', mailRouter)

app.listen(process.env.PORT, () => {
  console.log('corriendo servidor en Port..' + process.env.PORT)
})
