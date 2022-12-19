const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const db = require('./db');
const MovieController = require('./controller/movieController');

app.use(express.static('build/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/movies', (req, res) => {
  MovieController.getMovies(req, res);
});

app.post('/movies', (req, res) => {
  MovieController.postMovie(req, res);
});

app.listen(PORT, () => {
  console.log('Server listening on port:' + PORT);
});