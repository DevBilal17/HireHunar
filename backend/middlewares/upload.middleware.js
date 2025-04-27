// import multer from "multer";
// import path from "path";

// // Storage settings
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // ✅ Save in uploads/ folder
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, uniqueSuffix + path.extname(file.originalname)); // filename like: 123456789.png
//   },
// });

// // File filter (optional) - restrict file types if you want
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only images and PDF files are allowed!"), false);
//   }
// };

// // Export multer upload middleware
// export const upload = multer({ storage, fileFilter });
