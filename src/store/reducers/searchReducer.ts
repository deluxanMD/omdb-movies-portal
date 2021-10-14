import { SearchState, SEARCH_TYPE, SearchPayload } from "../types/searchTypes";

const initialState: SearchState = {
  isLoading: false,
  searchText: "",
  movies: [],
  totalResults: 0,
  error: null,
};

export const searchReducer = (
  state: SearchState = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SEARCH_TYPE.LOADING:
      console.log(action);
      return {
        ...state,
        searchText: action.payload,
        isLoading: true,
      };
    case SEARCH_TYPE.SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: action.payload.Search,
        totalResults: +action.payload.totalResults,
        error: null,
      };
    case SEARCH_TYPE.ERROR:
      return {
        ...state,
        isLoading: false,
        movies: [],
        totalResults: 0,
        error: action.payload,
      };
    case SEARCH_TYPE.CLEAR:
      return {
        ...state,
        isLoading: false,
        searchText: "",
        movies: [],
        totalResults: 0,
        error: null,
      };
    default:
      return state;
  }
};
