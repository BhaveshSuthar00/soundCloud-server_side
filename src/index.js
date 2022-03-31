const express = require("express")
require("dotenv").config();


const app = express()
app.use(express.json())
const PORT = process.env.PORT || 6767



const userController = require("./controllers/user.controller")
const likedController = require("./controllers/liked.controller")
const playlistController = require("./controllers/playlist.controller")
const libraryController = require("./controllers/library.controller")
const Songs = require("./controllers/Songs.controller")


app.use("/liked",likedController)
app.use('/songpost', Songs)
app.use("/playlist",playlistController)
app.use("/library",libraryController)

module.exports=app