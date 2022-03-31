const express = require("express")
require("dotenv").config();
const cors = require("cors")
const app = express()
const connect = require("./config/db")
app.use(express.json())

const PORT = process.env.PORT || 2000

const userController = require("./controllers/user.controller")
const likedController = require("./controllers/liked.controller")
const playlistController = require("./controllers/playlist.controller")
const libraryController = require("./controllers/library.controller")
const Songs = require("./controllers/Songs.controller")
app.use('/', Songs)
app.use("/liked",likedController)
app.use("/playlist",playlistController)
app.use("/library",libraryController)

app.listen(PORT, async ()=>{
    await connect()
    console.log(`listening on port ${PORT}`)
})