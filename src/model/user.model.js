const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
      email: { type: String, required: true , unique: true},
      password: { type: String, required: true },
      userName : { type: String, required: true}
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );

  module.exports =  mongoose.model("user",userSchema)
  