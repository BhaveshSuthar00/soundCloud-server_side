const mongoose = require("mongoose");

const likedSchema = new mongoose.Schema(
  {
    user_id: {
         type: mongoose.Schema.Types.ObjectId,
         ref:"user",
         required:true
     },
     likedSong:[{type: mongoose.Schema.Types.ObjectId,ref: 'song', required:true}]
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports =  mongoose.model("liked", likedSchema);
