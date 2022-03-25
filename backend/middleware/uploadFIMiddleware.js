const multer = require("multer");

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../Hungry/frontend/src/uploads/foodideaimages")
    },
    filename: (req, file, cb) => {
        fileName = file.originalname
        file.filename = fileName
        cb(null, fileName)
    },
})

const upload = multer({storage: fileStorageEngine})

module.exports = {upload}