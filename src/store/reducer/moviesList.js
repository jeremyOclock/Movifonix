import { SET_MOVIES } from '../actions/moviesList';

const initState = {
  data: null
};

const moviesListReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        data: action.payload.data
      };

    default:
      return state;
  }
};

export default moviesListReducer;
