const express = require('express');
const Song = require('../model/Song.model');
const router = express.Router();
router.post('/post', async (req, res) => {
    try {
        console.log(req.body)
        const songData = {
            name : req.body.name,
            singer : req.body.singer,
            cover : req.body.cover, 
            category : req.body.category,
            playlist: req.body.playlist,
            musicSrc : req.body.musicSrc
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
        return res.status(200).send(items);
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

router.get('/api/category/all', async (req, res) => {
    try  {
        const pop = await Song.find({ category : "pop"}).lean().exec();
        const classical = await Song.find({ category : 'classical'}).lean().exec();
        const rock = await Song.find({ category : 'rock'}).lean().exec();
        const jazz = await Song.find({ category : 'jazz'}).lean().exec();
        return res.status(200).send({pop : pop, classical : classical, rock : rock, jazz : jazz});
    }
    catch (err) {
        return res.status(500).send({error : err.message});
    }
})
module.exports=router