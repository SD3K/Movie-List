import React from 'react';
import { movie } from '../types';

const MovieListItem = function(props: {movie:movie, key: number}) {
  return (
    <div>
      <div>Title: {props.movie.title}</div>
      <div>Year: {props.movie.year}</div>
      <div>Genre: {props.movie.genre}</div>
    </div>
  );
}

export default MovieListItem;