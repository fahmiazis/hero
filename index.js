
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

const server = require('http').createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

const { APP_PORT, APP_URL } = process.env
console.log(APP_PORT)
server.listen(APP_PORT, () => {
    console.log(`App is running on ${APP_URL}`)
})
  