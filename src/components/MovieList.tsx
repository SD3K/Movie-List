import React from 'react';
import { useSelector } from 'react-redux';

function MovieList() {
  const movies = useSelector((state: { movies: { value: { title: string, year: number, genre: string }}}) => state.movies.value);
  console.log(movies);
  return (
    <div>
      <div>Title: {movies.title}</div>
      <div>Year: {movies.year}</div>
      <div>Genre: {movies.genre}</div>
    </div>
  );
}

export default MovieList;
