const MovieModel = require('../model/movieModel');

const getMovies = (req, res) => {
  MovieModel.getMovies((err, movies) => {
    if (err) {
      alert('Failed to get movies');
      res.status(500).send();
    }
    res.send(movies);
  })
};

const postMovie = (req, res) => {
  const movie = req.body;
  MovieModel.postMovie(movie, (err, data) => {
    if (err) {
      res.status(500).send();
    }
    res.status(201).send();
  })
};

module.exports = { getMovies, postMovie };
