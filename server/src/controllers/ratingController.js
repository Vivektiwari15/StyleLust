const Rating = require('../model/Rating')

class ratingController{

    create =  async(req,res)=>{

        try {
        
            if(!req.body.comment) return res.status(400).json({message:"please add comment",success:false})
            const commentData = await Rating({...req.body,user_id:req.user.token})
            await commentData.save()
            res.status(200).json({commentData,success:true})
    
        } catch (error) {
            res.status(500).json({message:"Server did not respond",success:false})
        }
    }

    find =  async(req,res)=>{
        try {
        
            const commentData = await Rating.find({outfit_id:req.params.id}).sort({_id:-1})
            if(commentData.length<=0) return res.status(200).json({message:"No comments found",success:false})
            res.status(200).json({commentData,success:true})
    
        } catch (error) {
            res.status(500).json({message:"Server did not respond",success:false})
        }

    }

}

module.exports = new ratingController()