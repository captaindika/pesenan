const express = require('express')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())

const userRoute = require('./src/route/user')
app.use(userRoute)
app.get('/test', (req, res)=> {
  res.send('Hallo')
})
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
