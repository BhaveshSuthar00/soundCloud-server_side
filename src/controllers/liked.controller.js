const express = require("express")
const Liked = require("../model/liked.model")

const router =  express.Router()


router.post("",async(req,res)=>{ 
    try{
        const liked = await Liked.create(req.body)
        return res.status(200).send(liked)
    }catch(err){
        return res.status(400).send(err.message)
    }
})


router.get("/:_id",async(req,res)=>{
    try{
        const userID = req.params._id

        const userLiked = await Liked.findOne({user_id:{$eq:userID}}).populate({path : 'listSong', select : []})

        return res.status(200).send(userLiked)
    }catch(err){
        return res.status(400).send(err.message)
    }
})

module.exports=router