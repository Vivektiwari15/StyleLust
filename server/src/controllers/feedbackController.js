const Feedback = require('../model/Feedback')

class feedbackController{

    create = async(req,res)=>{
        try {
        
            if(!req.body.email) return res.status(400).json({message:"please enter email",success:false})
            if(!req.body.description) return res.status(400).json({message:"please enter description",success:false})
            const isEmail = req.body.email.includes("@gmail.com");
            if(!isEmail) return res.status(400).json({message:"Invalid Email, we support only @gmail.com",success:false})
            const feedbackdata = await Feedback(req.body)
            await feedbackdata.save()
            res.status(201).json({message:"Feedback sended",success:true})
    
        } catch (error) {
            res.status(500).json({message:"Server did not respond",success:false})
        }
    }
    find = async(req,res)=>{
        try {
            const feedbackdata = await Feedback.find().sort({_id:-1})
            res.status(200).json({feedbackdata,success:true})
    
        } catch (error) {
            res.status(500).json({message:"Server did not respond",success:false})
        }
    }
    delete = async(req,res)=>{
        try {
            await Feedback.findByIdAndDelete(req.body.id)
            res.status(200).json({message:"Deleted a feedback",success:true})
    
        } catch (error) {
            res.status(500).json({message:"Server did not respond",success:false})
        }
    }
    
}

module.exports = new feedbackController()