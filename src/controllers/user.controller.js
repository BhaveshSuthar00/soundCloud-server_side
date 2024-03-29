const express = require("express")
const User = require("../model/user.model")

const router =  express.Router();


router.post("/post",async(req,res)=>{
    try{
        const alreadyUser =  await User.findOne({email : req.body.email}).lean().exec();
        if(alreadyUser) return res.status(403).send({message : 'Email already exist try login'});
        const user = await User.create({
            email: req.body.email,
            password : req.body.password,
            userName : req.body.name
        });
        return res.status(200).send(user);
    }catch(err){
        return res.status(400).send(err.message);
    }
})
router.get('/all', async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send(user);
    }
    catch(err){
        return res.status(400).send({message : "users not found"});
    }
})
router.delete('/delete/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({message : "users delete"});
    }
    catch(err){
        return res.status(400).send({message : "users not found"});
    }
})
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
        return res.status(200).send(user2);
    }catch(err){
        return res.status(400).send(err.message);
    }
})

module.exports=router