const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies');

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  genre: String
});

const Movies = mongoose.model('Movie', movieSchema);

const save = (movie, callback) => {
  console.log(movie);
  Movies.insertMany([movie], (err, movies) => {
    if (err) {
      console.error(err);
    } else {
      callback();
    }
  });
};

const getAll = (callback) => {
  Movies.find().exec(callback);
}

const remove = (title, callback) => {
  Movies.deleteOne({ title }, (err) => {
    if (err) {
      callback(err)
    } else {
      callback(null);
    }
  })
}

module.exports = { save, getAll, remove };
