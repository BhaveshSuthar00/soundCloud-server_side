const express = require("express");
const PlaylistG = require("../model/globleplaylist.model");
const Song = require("../model/Song.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const playlist = await PlaylistG.create(req.body);
    return res.status(200).send(playlist);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/", async (req, res) => {
    try {
      const playlist = await PlaylistG.find().lean().exec();
      return res.status(200).send(playlist);
    } catch (err) {
      return res.status(400).send(err.message);
    }
  });



router.get("/:id", async (req, res) => {
  try {
    const globalID = req.params.id;
    const ply = ['classical', 'pop', 'rock', 'jazz'];
    if(ply.includes(globalID)){
      const rep = await Song.find({ category : globalID }).lean().exec();
      return res.status(200).send(rep);
    }
    const globalPlaylist = await PlaylistG.findOne({name : globalID}).populate("playlist");
    return res.status(200).send(globalPlaylist.playlist);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
