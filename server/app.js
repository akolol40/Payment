const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', require('./routes/routers.js'))
app.listen(process.env.PORT ?? 3000, () => console.log(`server listen ${process.env.PORT ?? 3000}`))