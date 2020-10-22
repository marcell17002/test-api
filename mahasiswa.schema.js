const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  npm: {
    type: String,
    unique: true,
    required: true,
  },
  weight: {
    type: Number,
  },
});

module.exports = mahasiswaSchema;
