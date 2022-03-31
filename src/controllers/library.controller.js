const express = require("express")
const Library = require("../model/library.model")
const likedData = require("./liked.controller")
const playlistData = require("./playlist.controller")
const router =  express.Router()


router.post("",async(req,res)=>{
    try{
        const library = await Library.create(req.body)
        return res.status(200).send(library)
    }catch(err){
        return res.status(400).send(err.message)
    }
})


router.get("/:_id",async(req,res)=>{
    try{
        const userID = req.params._id

        const likedData = await likedData.find({user_id:{$eq:userID}})
        const playlistData = await playlistData.find({user_id:{$eq:userID}})
       
        
        return res.status(200).send({likedData,playlistData})
    }catch(err){
        return res.status(400).send(err.message)
    }
})

module.exports=router