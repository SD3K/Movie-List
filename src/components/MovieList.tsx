import React from 'react';
import { useSelector } from 'react-redux';
import MovieListItem from './MovieListItem';
import { movie } from '../types';

const MovieList = function() {
  const movies = useSelector((state: { movies: { value: Array<movie>}}) => state.movies.value);
  console.log(movies);
  return(
  <div className="movie-list">
    {movies.map((movie: movie, i) => (
      // <div>
      //   <div>Title: {movie.title}</div>
      //   <div>year: {movie.year}</div>
      //   <div>genre: {movie.genre}</div>
      // </div>
      <MovieListItem movie={movie} key={i}/>
    ))}</div>
  )
}

export default MovieList;
