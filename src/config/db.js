const mongoose = require("mongoose");
require("dotenv").config();
const connect = async () => {
    // return mongoose.connect("mongodb+srv://saurabh:saurabh@cluster0.ypmi8.mongodb.net/soundcloudDB?retryWrites=true&w=majority").then(()=> {
    //     // console.log("Connected")
    // })
    return mongoose.connect(process.env.MONGODBURL)
    .catch((e)=>{
        console.log(e)
    })
}

module.exports = connect