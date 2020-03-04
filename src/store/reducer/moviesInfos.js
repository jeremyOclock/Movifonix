import { SET_ONE_MOVIE } from '../actions/moviesInfos';

const initState = {
  data: null
};

const moviesInfosReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ONE_MOVIE:
      return {
        ...state,
        data: action.payload.data
      };

    default:
      return state;
  }
};

export default moviesInfosReducer;
