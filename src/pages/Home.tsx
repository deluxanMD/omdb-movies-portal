import React, { useState, useEffect } from "react";

// Redux
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { Movie, SearchState } from "../store/types/searchTypes";
import { getMovieDetails } from "../store/actions/detailActions";
import { DetailState } from "../store/types/detailType";

// Components
import InfoBox from "../components/InfoBox";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";

const Home = () => {
  // State
  const [expandedID, setExpandedID] = useState("");

  // Redux
  const search: SearchState = useSelector(
    (state: RootStateOrAny) => state.search
  );
  const detail: DetailState = useSelector(
    (state: RootStateOrAny) => state.detail
  );
  const dispatch = useDispatch();

  // Event Handlers
  const handleDetails = (id: string) => {
    setExpandedID(id);
    dispatch(getMovieDetails(id));
  };

  // Lifecycle
  useEffect(() => {
    setExpandedID("");
  }, []);

  const { isLoading, movies, totalResults, error } = search;

  const renderMovies = () => {
    if (movies && movies.length > 0) {
      return movies.map((movie: Movie, index: number) => {
        console.log(expandedID, "===>>>", movie.imdbID);
        return (
          <MovieCard
            key={`${movie.imdbID}_${index}`}
            imdbID={movie.imdbID}
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            handleDetails={handleDetails}
            className={expandedID === movie.imdbID ? "card-full-width" : ""}
            details={detail.data}
          />
        );
      });
    }
  };

  return (
    <div className="homepage">
      {error && <InfoBox info={error} variant="error" />}
      {!error && movies && movies.length < 1 && (
        <InfoBox
          info="Welcome to OMDB Search, search something in the bar above!"
          variant="info"
        />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <div className="homepage-movie-container">{renderMovies()}</div>
      )}
      {movies && movies.length > 0 && (
        <Pagination total={totalResults} perPage={movies.length} />
      )}
    </div>
  );
};

export default Home;
