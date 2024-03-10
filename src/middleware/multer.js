const multer=require('multer');
const responseFormate=require("../commons/response")

const ALLOWED_MIMETYPES=["application/pdf"]

const uploadOne = multer({
    storage: multer.diskStorage({
        destination: (_req, _file, cb) => {
            cb(null, "assets/uploads");
        },
        filename: (_req, file, cb) => {
            cb(null, Date.now().toString() + "-" + file.originalname);
        },
    }),
    limits: {
        files: 1,
        fileSize: 20000000, // 20 mb
    },
    fileFilter: (_req, file, cb) => {
        if (ALLOWED_MIMETYPES.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    },
});

const uploadSingle = uploadOne.single("media");

storeOneMedia = (req, res, next) => {
    uploadSingle(req, res, function (err) {
        if(!req.file){
            const response =responseFormate(400,"Media attachment not matched");
            return res.status(response.code).json(response);
        }
        if (err) {
            const response =responseFormate(400,err.message);
            return res.status(response.code).json(response);
        }   
     next();
    });
};

module.exports={storeOneMedia}