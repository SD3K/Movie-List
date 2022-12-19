import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import MovieListItem from "./MovieListItem";
import { movie } from "../types";
import { add } from "../features/movies";

const MovieList = function () {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/movies')
    .then(res => {
      const allMovies: Array<movie> = res.data;
      dispatch(add(allMovies));
    })
    .catch(err => {
      console.error(err);
    })
  })

  const movies = useSelector(
    (state: { movies: { value: Array<movie> } }) => state.movies.value
  );

  return (
    <div className="movie-list">
      {movies.map((movie: movie, i) => (
        <MovieListItem movie={movie} key={i} />
      ))}
    </div>
  );
};

export default MovieList;
