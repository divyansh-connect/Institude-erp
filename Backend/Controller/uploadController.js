const fs = require("fs");
const cloudinary = require("../config/cloudinary");

exports.postStdAdmPhoto = async (req, res, next) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const uploaded = await cloudinary.uploader.upload(file.path, {
      folder: "admissionPhoto",
      transformation: [{ width: 400, height: 400, crop: "fill" }],
    });
    fs.unlinkSync(file.path);
    res.status(200).json({
      uploadUrl: uploaded.secure_url,
    });
  } catch (error) {
    res.status(500).json({ message: "Upload failed" });
  }
};
