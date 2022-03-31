const express = require("express");
const Playlist = require("../model/playlist.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const playlist = await Playlist.create(req.body);
    return res.status(200).send(playlist);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const userID = req.params._id;

    const userPlaylist = await Playlist.find({ user_id: { $eq: userID } });

    return res.status(200).send(userPlaylist);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
