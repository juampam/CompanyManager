const express =  require('express')
const port = 3000
//const connect = require('./src/database/connection')
const app = require("./app")

app.get('/', (req, res) => {
  res.send('Server runing')
})
app.listen(port, ()=>{
	console.log("Server running on port",port)
})
