const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
      email: { type: String, required: false },
      password: { type: String, required: false },
      
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

  module.exports =  mongoose.model("user",userSchema)
  