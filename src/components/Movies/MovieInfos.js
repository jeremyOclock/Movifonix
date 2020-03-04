import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setOneMovie } from '../../store/actions/moviesInfos';

const MovieInfos = ({ match }) => {
  console.log(match);
  const dispatch = useDispatch();
  const movie = useSelector(state => state.moviesInfos.data);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=87afe76c619242816b5e9c9a59e230b6`
    )
      .then(res => res.json())
      .then(results => {
        console.log(results);
        dispatch(setOneMovie({ data: results }));
      })
      .catch(console.log);
  }, []);

  return (
    <div className="movie-infos">
      {movie && (
        <>
          <div className="movie-infos__header">
            <h1 className="movie-infos__header__title">
              {movie.original_title}
            </h1>
            <span className="movie-infos__header__vote">
              {movie.vote_average}
            </span>
          </div>
          <img
            className="movie-infos__img"
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          />
          <p className="movie-infos__description">{movie.overview}</p>

          <Link className="movie-infos__back" to="/">
            Back{' '}
          </Link>
        </>
      )}
    </div>
  );
};

export default MovieInfos;
