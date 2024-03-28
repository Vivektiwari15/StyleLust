const mongoose = require('mongoose');

const connetToDatabase = async()=>{
    await mongoose.connect(process.env.DATABASE_STRING).then(()=>{
        console.log("Connected to Database")
    }).catch((e)=>{
        console.log(process.env.DATABASE_STRING)
        console.log("Disconnected to Database",e)
    })
}

module.exports = connetToDatabase
