const mongoose = require("mongoose");

const connect = async () => {
    // return mongoose.connect("mongodb+srv://saurabh:saurabh@cluster0.ypmi8.mongodb.net/soundcloudDB?retryWrites=true&w=majority").then(()=> {
    //     // console.log("Connected")
    // })
    return mongoose.connect('mongodb+srv://bhavesh:bhavesh@cluster0.vxlup.mongodb.net/soundCloud?retryWrites=true&w=majority')
    .catch((e)=>{
        console.log(e)
    })
}

module.exports = connect