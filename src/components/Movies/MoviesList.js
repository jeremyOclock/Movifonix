import React, { useEffect } from 'react';
import MovieCard from './MovieCard';

import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../../store/actions/moviesList';

const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.moviesList.data);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=87afe76c619242816b5e9c9a59e230b6'
    )
      .then(res => res.json())
      .then(({ results }) => {
        console.log(results);
        dispatch(setMovies({ data: results }));
      })
      .catch(console.log);
  }, []);

  return (
    <ul className="movie-list">
      {movies &&
        movies.map(({ original_title, id, poster_path }) => (
          <li className="movie-list__movie">
            <MovieCard
              title={original_title}
              slug={id.toString()}
              image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            />
          </li>
        ))}
    </ul>
  );
};

export default MoviesList;
