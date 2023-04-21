const controller = require('../controller/companyController')
var express = require('express')
var cors = require('cors')
var bodyp = require('body-parser')
const { response } = require('express')
var app = express()



app.use(bodyp.urlencoded({extended:true}))
app.use(bodyp.json())
app.use(cors())

var api = express.Router()
app.use('/api', api)
api.get('/home',controller.getAllCompanies)
api.put('/company',controller.getCompanyById)
api.post('/newcompany',controller.createCompany)
api.put('/updatecompany',controller.updateCompany)
api.delete('/deletecompany',controller.deleteCompany)

module.exports = api
