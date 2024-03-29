const mongoose = require('mongoose');

const superAdminSchema = mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const SuperAdmin = mongoose.model("Super Admin",superAdminSchema)

module.exports = SuperAdmin