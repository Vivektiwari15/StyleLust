const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

// Routes
app.use('',require('./src/index'))


const connetToDatabase = require('./src/config/connection')
const PORT = process.env.PORT || 2000

connetToDatabase().then(()=>{
    app.listen(PORT,()=>{
        console.log("app listening to port:",PORT)
    })
}).catch(()=>{
    console.log("App cannot listen to port:")
})
