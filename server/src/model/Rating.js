const mongoose = require("mongoose")

const ratingSchema = mongoose.Schema({

    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    outfit_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Outfit",
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})


const Rating = mongoose.model("Rating",ratingSchema)

module.exports = Rating