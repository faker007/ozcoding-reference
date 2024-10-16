const sharp = require("sharp");

sharp("input.jpg")
  .resize(400, 560)
  .toFile("output.jpg", (err, info) => {
    if (err) {
      console.error("Error processing image:", err);
    } else {
      console.log("Image processed:", info);
    }
  });
