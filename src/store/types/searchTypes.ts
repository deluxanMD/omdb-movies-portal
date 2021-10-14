export const SEARCH_TYPE = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  CLEAR: "CLEAR",
};

export interface SearchPayload {
  Search: Array<Movie>;
  totalResults: number;
}

export interface Movie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface SearchState {
  isLoading: boolean;
  searchText: string;
  movies: Array<Movie>;
  totalResults: number;
  error: string | null;
}
