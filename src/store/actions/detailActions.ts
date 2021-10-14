import { DETAIL_TYPE } from "../types/detailType";
import { searchMovieDetails } from "../../helpers/axios";

const loading = () => ({ type: DETAIL_TYPE.LOADING });
const detailSuccess = (response: any) => ({
  type: DETAIL_TYPE.SUCCESS,
  payload: response,
});
const detailError = (error: any) => ({
  type: DETAIL_TYPE.ERROR,
  payload: error,
});

export const getMovieDetails = (imdbID: string) => async (dispatch: any) => {
  //   dispatch(loading());
  const details: any = await searchMovieDetails(imdbID);
  //   console.log(details);
  if (details.data.Response === "False") {
    dispatch(detailError(details.data.Error));
  } else {
    console.log(details.data);
    dispatch(
      detailSuccess({
        imdbID: details.data.imdbID,
        plot: details.data.Plot,
        actors: details.data.Actors,
        ratings: details.data.Ratings,
      })
    );
  }
};

export const clearMovieDetails = () => ({ type: DETAIL_TYPE.CLEAR });
