import axios from "axios";

const { REACT_APP_OMDB_URL, REACT_APP_OMDB_API_KEY } = process.env;

export const searchMovies = async (searchText: string, page: number) => {
  return await axios.get(
    `${REACT_APP_OMDB_URL}apikey=${REACT_APP_OMDB_API_KEY}&s=${searchText}&page=${page}`
  );
};

export const searchMovieDetails = async (imdbID: string) => {
  return await axios.get(
    `${REACT_APP_OMDB_URL}apikey=${REACT_APP_OMDB_API_KEY}&i=${imdbID}&plot=short`
  );
};
