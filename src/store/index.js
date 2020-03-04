import { combineReducers, createStore } from 'redux';

import moviesListReducer from './reducer/moviesList';
import moviesInfosReducer from './reducer/moviesInfos';

const rootReducer = combineReducers({
  moviesList: moviesListReducer,
  moviesInfos: moviesInfosReducer
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
