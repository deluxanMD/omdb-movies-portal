import { SearchState, Movie, SEARCH_TYPE } from "../types/searchTypes";

const initialState: SearchState = {
  isLoading: false,
  movies: [],
  error: null,
};

export const searchReducer = (
  state: SearchState = initialState,
  action: { type: string; payload: Movie }
) => {
  switch (action.type) {
    case SEARCH_TYPE.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_TYPE.SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
        error: null,
      };
    case SEARCH_TYPE.ERROR:
      return {
        ...state,
        isLoading: false,
        movies: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
