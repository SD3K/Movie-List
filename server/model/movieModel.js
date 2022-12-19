const db = require('../db');

const getMovies = (callback) => {
  db.getAll((err, movies) => {
    if (err) {
      callback(err);
    } else {
      callback(null, movies);
    }
  })
};

const postMovie = (movie, callback) => {
  db.save(movie, (err, docs) => {
    if (err) {
      callback(err);
    } else {
      callback(null, docs);
    }
  })
};

module.exports = { getMovies, postMovie };