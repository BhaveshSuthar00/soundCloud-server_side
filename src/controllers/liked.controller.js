const express = require("express")
const Liked = require("../model/liked.model")

const router =  express.Router()


router.post("",async(req,res)=>{ 
    try{
        const findExistingUser = await Liked.findOne({userId : req.body.userId}).lean().exec();

        if(findExistingUser){
            
            const kr = await Liked.find({ $and : [{ userId : req.body.userId}, { likedSong : { $eq : req.body.songId}}]});
            
            if(kr.length > 0) return res.status(403).json({message  : 'Song already exists'});
            
            await Liked.findOneAndUpdate({userId : req.body.userId}, { $push : { likedSong : req.body.songId}});
            
            const newLikeList = await Liked.findOne({userId : req.body.userId}).populate({path : 'likedSong'}).lean().exec();

            return res.status(201).json(newLikeList.likedSong);
        }
        await Liked.create({
            userId : req.body.userId,
            likedSong : [req.body.songId,]
        });
    
        const findLiked = await Liked.findOne({userId : req.body.userId}).populate({path : 'likedSong'}).lean().exec();
    
        return res.status(200).send(findLiked.likedSong);
    
    } catch(err){
        console.log(err);
        return res.status(400).send(err.message)
    }
})

router.get("/:id",async(req,res)=>{
    try{
        const userID = req.params.id;

        const userLiked = await Liked.findOne({userId: userID}).populate({path : 'likedSong'});
        
        if(userLiked){
            return res.status(200).send(userLiked.likedSong);
        } else {
            return res.status(203).send({message : "user don't have any liked song"})
        }
    }catch(err){
        return res.status(400).send(err.message)
    }
})

router.delete("/delete/:id", async (req, res) => {
    try {
        const userId = req.query.userId;
        const songId = req.params.id;
        await Liked.updateOne({userId : userId}, {$pull : {likedSong : songId}});
        const userLiked = await Liked.findOne({userId: userId}).populate({path : 'likedSong'});
        return res.status(200).send(userLiked.likedSong);
    }
    catch(err){
        return res.status(400).send(err.message)
    }
})
module.exports=router