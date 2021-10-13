export const SEARCH_TYPE = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface SearchState {
  isLoading: boolean;
  movies: Array<Movie>;
  error: string | null;
}
