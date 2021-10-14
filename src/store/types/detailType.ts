export const DETAIL_TYPE = {
  LOADING: "DETAIL_LOADING",
  SUCCESS: "DETAIL_SUCCESS",
  ERROR: "DETAIL_ERROR",
  CLEAR: "DETAIL_CLEAR",
};

export interface Rating {
  Source: string;
  Value: string;
}

export interface Data {
  imdbID: string;
  plot: string;
  actors: string;
  ratings: Array<Rating>;
}

export interface DetailState {
  isLoading: boolean;
  data: any;
  error: string | null;
}
