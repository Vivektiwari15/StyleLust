const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({

    email:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

const Feedback = mongoose.model('Feedback',feedbackSchema)

module.exports = Feedback