import multer from "multer"

export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/image')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    req.uploadFileName = uniqueSuffix + file.originalname
    cb(null, uniqueSuffix + file.originalname)
  }
})