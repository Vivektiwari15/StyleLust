const User = require('../model/User')

class dataController{

    find = async(req,res)=>{
        try {
            const userData = await User.find().sort({_id:-1})
            if(userData.length<=0) return res.status(404).json({message:"User not Found",success:false})
            res.status(200).json({userData,success:true})
    
        } catch (error) {
            res.status(500).json({message:"Server did not respond",success:false})
        }
    }

    delete = async(req,res)=>{
        try {
            await User.findByIdAndDelete(req.body.id)
            res.status(200).json({message:"Deleted a User",success:true})
    
        } catch (error) {
            res.status(500).json({message:"Server did not respond",success:false})
        }
    }
}

module.exports = new dataController()