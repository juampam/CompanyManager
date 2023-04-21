'use strict'

const express = require("express")
const app = express()
var CORS = require("cors")
const bodyParser = require("body-parser")

var api = express.Router()
var routes = require("./src/routes/routes")
   
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    app.use(CORS())

app.use('/api', routes)

module.exports = app
