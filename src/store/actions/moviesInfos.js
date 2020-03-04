export const MOVIES = 'movies';

export const SET_ONE_MOVIE = `${MOVIES}/SET_ONE_MOVIE`;

export const setOneMovie = ({ data }) => ({
  type: SET_ONE_MOVIE,
  payload: { data }
});
