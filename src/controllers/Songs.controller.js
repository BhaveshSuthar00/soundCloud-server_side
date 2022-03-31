const express = require('express');
const Song = require('../model/Song.model');
const {uploadSingle}=require("../Middleware/Upload")
const router = express.Router();
const fs = require('fs');
router.post('/post',uploadSingle('musicSrc'), async (req, res) => {
    try {
        const songData = {
            name : req.body.name,
            singer : req.body.singer,
            cover : req.body.cover, 
            category : req.body.category,
            playlist: req.body.playlist,
            musicSrc : req.file.path
        }
        const product = await Song.create(songData);
        return res.status(200).send(product)
    } 
    catch (err) {
        return res.status(401).send(err)

    }
})

router.get('/',async(req, res) => {
    try {
        const songsData = await Song.find().lean().exec();
        return res.status(200).send(songsData);
    }
    catch (err) {

    }
})
router.get('/api/:id', async (req, res) => {
    try {
        const item = await Song.find({category: req.params.id}).lean().exec();
        return res.status(200).send(item);
    }
    catch (err) {
        
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const items = await Song.findByIdAndDelete(req.params.id);
        const path = items.musicSrc;
        fs.unlink(path,(err) => {
            if(err){
                console.log(err);   
            }    
            else{
                console.log('success in deleting file');
            }
        });
        return res.status(200).send(items);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})
module.exports=router