const app = require("./index")
const connect = require("./config/db")



app.listen(2000,async ()=>{
    await connect()
    console.log("listening on port 2000")
})

