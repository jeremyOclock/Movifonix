export const MOVIES = 'movies';

export const SET_MOVIES = `${MOVIES}/SET_MOVIES`;

export const setMovies = ({ data }) => ({
  type: SET_MOVIES,
  payload: { data }
});
