const express = require("express");
const PlaylistG = require("../model/globleplaylist.model");

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



router.get("/:_id", async (req, res) => {
  try {
    const globalID = req.params._id;

    const globalPlaylist = await PlaylistG.findById(globalID);

    return res.status(200).send(globalPlaylist);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
