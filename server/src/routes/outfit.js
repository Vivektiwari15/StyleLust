const router = require('express').Router()
const upload = require('../middleware/multerUpload')
const Outfit = require('../model/Outfit')


router.post('/create',upload.single('outfitImg'),async(req,res)=>{

    try {

        if(!req.file) return res.status(500).json({message:"Please upload Outfit photo",success:false})
        if(!req.body.name) return res.status(500).json({message:"Please enter Outfit name",success:false})
        if(!req.body.upperWear) return res.status(500).json({message:"Please enter upper wear",success:false})
        if(!req.body.lowerWear) return res.status(500).json({message:"Please enter lower wear",success:false})
        if(!req.body.bottomWear) return res.status(500).json({message:"Please enter bottom wear",success:false})
        
        const outfitData = await Outfit({...req.body,outfitImg:req.file.filename})
        const saveOutfit = await outfitData.save()
        res.status(201).json({message:"Outfit added....!",success:true,saveOutfit})

    } catch (error) {
        res.status(500).json({message:"Server did not respond",success:false})
    }
})

router.get('/find',async(req,res)=>{
    try {
        const outfitData = await Outfit.find().sort({_id:-1})
        if(outfitData.length<=0) return  res.status(404).json({message:"Empty Outfit not Found",success:false})
        res.status(200).json({outfitData,success:true})

    } catch (error) {
        res.status(500).json({message:"Server did not respond",success:false})
    }
})

router.get('/findOne',async(req,res)=>{
    try {
        if(!req.query.id) return  res.status(404).json({message:"Invalid request",success:false})
        const outfitData = await Outfit.findOne({_id:req.query.id})
        if(outfitData == null) return  res.status(404).json({message:"Invalid request",success:false})
        res.status(200).json({outfitData,success:true})

    } catch (error) {
        res.status(500).json({message:"Server did not respond",success:false})
    }
})

router.delete('/delete',async(req,res)=>{
    try {
        if(!req.body.id) return  res.status(404).json({message:"Invalid request",success:false})
        const findOutfit = await Outfit.findOne({_id:req.body.id})
        if(findOutfit == null) return  res.status(404).json({message:"Invalid request",success:false})
        const outfitData = await Outfit.findByIdAndDelete(findOutfit._id)
        res.status(200).json({outfitData,success:true})

    } catch (error) {
        res.status(500).json({message:"Server did not respond",success:false})
    }
})

router.put('/update',async(req,res)=>{
    try {
        res.send("20% ma")

    } catch (error) {
        res.status(500).json({message:"Server did not respond",success:false})
    }
})

module.exports = router