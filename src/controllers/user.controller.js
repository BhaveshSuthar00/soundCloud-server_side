const express = require("express")
const User = require("../model/user.model")

const router =  express.Router()


router.post("/post",async(req,res)=>{
    try{
        const user = await User.create({
            email: req.body.email,
            password : req.body.password,
            userName : req.body.name
        })
        return res.status(200).send(user)
    }catch(err){
        return res.status(400).send(err.message)
    }
})
// router.get('/all', async (req, res) => {
//     try {
//         const user = await User.find().lean().exec();
//         return res.status(200).send(user)
//     }
//     catch(err){
//         return res.status(400).send({message : "users not found"})
//     }
// })

router.post("/login/singleuser",async(req,res)=>{
    try{
        
        const user = await User.findOne({ email: req.body.email });
        const user2 = await User.findOne({ email: req.body.email }, { password : 0});
        if (!user) {
            return res.render("login", {
                success: false,
                message: "Incorrect Email or Password",
            });
        }
        const match = user.checkPassword(req.body.password);
        if (!match) {
            return res.status(404).send({
                success: false,
                message: "Incorrect Password",
            });
        }
        console.count(user2, 'rewq is new now');
        return res.status(200).send(user2)
    }catch(err){
        return res.status(400).send(err.message)
    }
})

module.exports=router