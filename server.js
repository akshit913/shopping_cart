const express = require('express')
const app = express()
const path = require('path')
const { urlencoded } = require('express')
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/',express.static(path.join(__dirname,'public')))
app.use('/api',require('./routes/api/').route) //this requires index.js automatically

app.listen(3000,()=>{
    console.log('Server started at https://localhost:3000')
})