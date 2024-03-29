const jwt = require("jsonwebtoken");
const Admin = require('../model/Admin');
const bcrypt = require("bcrypt");


class adminController{

    register = async(req,res)=>{
        try {
            
            const token = req.header("spAdmintoken")
            if(!token) return res.status(404).json({ message: "Invalid Token", success: false })
            const decode = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decode.data
            if(!req.user.isSuperAdmin) return res.status(500).json({message:"Unauthorized User",success:false})
            if(!req.body.username) return res.status(400).json({message:"please enter username",success:false})
            if(!req.body.password) return res.status(400).json({message:"please enter password",success:false})
    
            const findUser = await Admin.findOne({username:req.body.username})
          
            if(findUser != null) return res.status(400).json({message:"already a Admin",success:false})
            const userData = await Admin(req.body)
            await userData.save()
            res.status(200).json({message:"Admin registered succesfully",success:true})
    
        } catch (error) {
            res.status(500).json({message:"Server did not respond",success:false})
        }
    }

    login = async(req,res)=>{
        try {
            
            if(!req.body.username) return res.status(400).json({message:"please enter username",success:false})
            if(!req.body.password) return res.status(400).json({message:"please enter password",success:false})
    
            const findUser = await Admin.findOne({username:req.body.username})    
            if(findUser == null) return res.status(409).json({message:"Admin not found",success:false})
            
            const isMatch = await bcrypt.compare(req.body.password,findUser.password);
            if (!isMatch)return res.status(409).json({ message: "Invalid email or password", success: false });
                
                const data = {
                    data:{
                        token:findUser.id,
                        isSuperAdmin:false,
                        admin:true    
                    }
                }
            const spAdmintoken = jwt.sign(data, process.env.SECRET_KEY);
            res.status(200).json({message:"Admin login succesfully",success:true,spAdmintoken})
    
        } catch (error) {
            res.status(500).json({message:"Server did not respond",success:false})
        }
    }

}

module.exports = new adminController()