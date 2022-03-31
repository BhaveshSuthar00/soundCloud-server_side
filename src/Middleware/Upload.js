const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, "../uploads"))
        // console(path.join(__dirname, "../uploads"))
    },
    filename : function(req,file, cb){
        let ext = path.extname(file.originalname);
        cb(null, Date.now()+ext)
    }
})

var upload = multer({
    storage : storage,
    filterFilter : function(req, file, callback){
        if(file.mimetype === "music/mp3"){
            callback(null, true)
        } else {
            console.log('only mp3 files supported')
            callback(null, false)
        }
    }
})
const uploadSingle = (fileKey) => {
    return function (req, res, next) {
      const uploadItem = upload.single(fileKey);
      uploadItem(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).send(err.message);
        } else if (err) {
          return res.status(500).send(err.message);
        }
        // Everything went fine.
        next();
      });
    };
  };
module.exports = {upload,uploadSingle};
