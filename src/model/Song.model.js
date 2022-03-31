const mongoose = require('mongoose');
const songSchema = new mongoose.Schema({
    name : {type: String, required: true},
    singer : {type: String, required: true}, 
    cover : {type : String, required: true},
    musicSrc : {type: String, required: true},
    category : {type: String, required : true},
    playlist : [{type: String, required: true}],
}, {
    versionKey : false,
})
const Song = mongoose.model('song', songSchema);

module.exports = Song;