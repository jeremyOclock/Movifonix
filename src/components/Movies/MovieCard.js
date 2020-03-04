import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, image, slug }) => (
  <Link className="movie-card" to={slug}>
    <div className="movie-card__container">
      <img className="movie-card__container__img" src={image} alt="" />
    </div>
    <h3 className="movie-card__title">{title}</h3>
  </Link>
);

export default MovieCard;
