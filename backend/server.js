const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
require('dotenv').config()
const route = require('./Routes/routes')
const mongoose = require('mongoose')




//route middleware
app.use('/routes', route);



app.get('/', (req,res)=>{
    res.redirect('/routes')
})

app.listen(port, ()=>{
    console.log(`server open on http://localhost:${port}`)
    mongoose.connect("mongodb://localhost:27017/users")
    .then(console.log('connected to db'))

})

