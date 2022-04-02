const express = require("express")
const User = require("../model/user.model")

const router =  express.Router()


router.post("/post",async(req,res)=>{
    try{
        const user = await User.create(req.body)
        return res.status(200).send(user)
    }catch(err){
        return res.status(400).send(err.message)
    }
})


router.get("/login",async(req,res)=>{
    try{
        const user = await User.findOne({$and : [{email : req.body.email}, {password : req.body.password}]}).lean().exec()
        if(user){
            return res.status(200).send(user)
        } else {
            return res.status(404).send({message: "User not found"})
        }
    }catch(err){
        return res.status(400).send(err.message)
    }
})

module.exports=router