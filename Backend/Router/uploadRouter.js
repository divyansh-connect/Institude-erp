const express = require("express");
const multer = require("multer");
const uploadController = require("../Controller/uploadController");
const authMiddleware = require("../Middleware/authMiddleware");
const uploadRouter = express.Router();

const upload = multer({ dest: "uploads/" });

uploadRouter.use(authMiddleware);
uploadRouter.post(
  "/stdAdmPhoto",
  upload.single("stdAdmPhoto"),
  uploadController.postStdAdmPhoto,
);

module.exports = uploadRouter;
