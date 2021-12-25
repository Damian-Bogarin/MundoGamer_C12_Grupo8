const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({ //De multer tiene asignada la propiedad diskStorage
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/avatars')); //ubicación
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
        //captura con el método date, una hora y fecha entonces retorna un string con un código único
    }
})

/* Subida de nuevos archivos */
const fileFilter = function(req, file, callback) { // ??
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        req.fileValidationError = "Sólo imágenes (.jpg, .png, .gif)";
        return callback(null, false, req.fileValidationError);
    }
    callback(null, true);
}


const uploadFile = multer({ storage, fileFilter });

module.exports = uploadFile;