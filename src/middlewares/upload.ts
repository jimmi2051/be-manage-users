import util = require("util");
import multer = require("multer");
import { STATIC_URL } from "../utils/Constants";
import { makeFolder } from "../utils/Helpers";

const PATH_UPLOAD = STATIC_URL + "uploads/";
// Init folder static if not exist
makeFolder(STATIC_URL);
// Init folder uploads if not exist
makeFolder(PATH_UPLOAD);

const maxSize = 2 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH_UPLOAD);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadPhoto = multer({
  storage,
  limits: { fileSize: maxSize },
}).single("photo");

export const uploadPhotoMiddleware = util.promisify(uploadPhoto);
