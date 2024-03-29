const SuperAdmin = require('../model/SuperAdmin')
const otpSender = require('../utils/mailSmtp')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

let otpStore = new Map()


class superAdminController {
    
    signup = async(req,res)=>{
        try {
        
            if(!req.body.username) return res.status(400).json({message:"please enter username",success:false})
            if(!req.body.password) return res.status(400).json({message:"please enter password",success:false})
    
            const findUser = await SuperAdmin.findOne({username:req.body.username})
          
            if(findUser != null) return res.status(400).json({message:"already a super admin",success:false})
            const setOtp = await otpSender(process.env.SUPER_ADMIN_EMAIL)
            otpStore.set("otp",setOtp.otp)
            const data = {
                data:{
                    username:req.body.username,
                    password:req.body.password
                }
            }
            const dataToken = jwt.sign(data, process.env.SECRET_KEY);
            res.status(200).json({dataToken,success:true})
    
        } catch (error) {
            res.status(500).json({message:"Server did not respond",success:false})
        }
    }
    verify = async(req,res)=>{
        try {
        
            const token = req.header("dataToken")
            if(!token) return res.status(404).json({ message: "Invalid Token", success: false })
            if(!req.body.otp) return res.status(400).json({message:"please enter otp",success:false})
            const decode = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decode.data
            const getOtp = otpStore.get("otp")
            if(req.body.otp != getOtp) return res.status(400).json({message:"Invalid otp",success:false})
            const spAdminData = await SuperAdmin(req.user)
             await spAdminData.save()
            
            res.status(200).json({message:"Super admin registered",success:true})
    
        } catch (error) {
            res.status(500).json({message:"Server did not respond",success:false})
        }
    }
    login = async(req,res)=>{
        try {

            if(!req.body.username) return res.status(400).json({message:"please enter username",success:false})
            if(!req.body.password) return res.status(400).json({message:"please enter password",success:false})
    
            const findUser = await SuperAdmin.findOne({username:req.body.username})
            if(findUser == null) return res.status(400).json({message:"Invalid username or password",success:false})
            
            const isMatch = await bcrypt.compare(req.body.password,findUser.password);
            if (!isMatch)return res.status(409).json({ message: "Invalid email or password", success: false });
            
            const data = {
                data:{
                    token:findUser.id,
                    isSuperAdmin:true,
                    admin:true    
                }
            }
            const spAdmintoken = jwt.sign(data, process.env.SECRET_KEY);
            res.status(200).json({message:"Login successfully",success:true,spAdmintoken})
    
    
        } catch (error) {
            
            res.status(500).json({message:"Server did not respond",success:false})
        }
    }

}

module.exports = new superAdminController()