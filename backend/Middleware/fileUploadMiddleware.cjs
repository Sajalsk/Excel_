// fileUploadMiddleware.js
const fileUpload = require("express-fileupload")

module.exports = fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }, // Maximum file size (50 MB)
});

export default mongoose.model("fileUpload", fileUploadMiddleware);