
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  genre: { type: String },
  published_year: { type: String },
  image: { type: String },
  username: { type: String}
});

module.exports = mongoose.model("Book", bookSchema);
