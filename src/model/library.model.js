const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema(
  {
    user_id: {
         type: mongoose.Schema.Types.ObjectId,
         ref:"user",
         required:true
     },
     library:{type:mongoose.Schema.Types.ObjectId, ref : 'song', required:true}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports =  mongoose.model("library", librarySchema);
