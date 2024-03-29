const mongoose = require('mongoose');

const outfitSchema = mongoose.Schema({

    outfitImg:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    upperWear:{
        type:String,
        required:true
    },
    innerWear:{
        type:String,
    },
    lowerWear:{
        type:String,
        required:true
    },
    bottomWear:{
        type:String,
        required:true
    },
    watch:{
        type:String
    },
    bracelet:{
        type:String
    },
    necklace:{
        type:String
    },
    Accessories1:{
        type:String
    },
    Accessories2:{
        type:String
    },
    Accessories3:{
        type:String
    }
},
{
    timestamps:true
}
)

const Outfit = mongoose.model('Outfit',outfitSchema)

module.exports = Outfit