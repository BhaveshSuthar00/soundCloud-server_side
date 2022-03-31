const mongoose = require("mongoose");
require("dotenv").config();
const connect = async () => {
    return mongoose.connect(process.env.MONGODBURL)
    .catch((e)=>{
        console.log(e)
    })
}

module.exports = connect