const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dmgkjo9pm",
  api_key: "YOUR_CLOUDINARY_API_KEY",
  api_secret: process.env.CLOUDINARY_SECRET, // Store API Secret in environment variable
});

module.exports = cloudinary;
