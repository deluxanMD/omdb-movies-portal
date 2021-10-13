import { SEARCH_TYPE, Movie } from "../types/searchTypes";
import { searchMovies } from "../../helpers/axios";

const loading = () => ({ type: SEARCH_TYPE.LOADING });
const success = (response: Movie) => ({
  type: SEARCH_TYPE.SUCCESS,
  payload: response,
});
const error = (error: any) => ({
  type: SEARCH_TYPE.ERROR,
  payload: error,
});

export const getMovies = (searchText: string) => async (dispatch: any) => {
  dispatch(loading());
  const movies: any = await searchMovies(searchText);
  if (movies.data.Response) {
    dispatch(success(movies.data.Search));
  }
};
