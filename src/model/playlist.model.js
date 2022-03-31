const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema(
  {
    user_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref:"user",
          required:true
      },
      playlist:[{type: mongoose.Schema.Types.ObjectId, ref : 'song', required:true}]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports =  mongoose.model("playlist", playlistSchema);
