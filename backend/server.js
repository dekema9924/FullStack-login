const express = require('express');
const app = express()
const port = 3000;
require('dotenv').config()




app.listen(port, ()=>{
    console.log(`server open on http://localhost:3000`)
})

