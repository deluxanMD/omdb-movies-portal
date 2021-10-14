import { SEARCH_TYPE, Movie } from "../types/searchTypes";
import { searchMovies } from "../../helpers/axios";

const loading = (searchText: string) => ({
  type: SEARCH_TYPE.LOADING,
  payload: searchText,
});
const success = (response: Movie) => ({
  type: SEARCH_TYPE.SUCCESS,
  payload: response,
});
const error = (error: any) => ({
  type: SEARCH_TYPE.ERROR,
  payload: error,
});

export const getMovies =
  (searchText: string, page: number) => async (dispatch: any) => {
    dispatch(loading(searchText));
    const movies: any = await searchMovies(searchText, page);
    console.log(movies);
    if (movies.data.Response === "True") {
      dispatch(success(movies.data));
    } else if (movies.data.Response === "False") {
      dispatch(error(movies.data.Error));
    }
  };
