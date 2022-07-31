const mongoose = require('mongoose');
const Schema = mongoose.Schema;

await mongoose.connect('mongodb://localhost/movies');

const Movie = new Schema({
  title: String,
  year: Number,
  genre: String
});

mongoose.model('movie', Movie);