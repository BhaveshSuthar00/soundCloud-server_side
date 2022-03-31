const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema(
    {
        name : {type :String, required : true},
        playlist:[{type: mongoose.Schema.Types.ObjectId, ref : 'song', required:true}]
    },
    {
    versionKey: false,
    timestamps: true,
    }
);

module.exports =  mongoose.model("playlist", playlistSchema);
