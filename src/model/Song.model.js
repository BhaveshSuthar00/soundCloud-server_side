const mongoose = require('mongoose');
const songSchema = new mongoose.Schema({
    name : {type: String, required: true},
    singer : {type: String, required: true}, 
    cover : {type : String, required: true},
    musicSrc : {type: String, required: true},
    category : {type: String, required : true},
    playlist : [{type: String, required: true}],
})
// name: "Despacito",
//     singer: "Luis Fonsi",
//     cover:
//     "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
//     musicSrc:
//     "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
//       category : [
//         'hip hop', 'rock', 'pop'
// ]
const Song = mongoose.model('song', songSchema);

module.exports = Song;