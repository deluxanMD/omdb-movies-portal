import React, { useState } from "react";

// Redux
import { RootStateOrAny, useSelector } from "react-redux";
import { Movie, SearchState } from "../store/types/searchTypes";

// Components
import InfoBox from "../components/InfoBox";
import Loader from "../components/Loader";
import MovieCard from "../components/MovieCard";

const Home = () => {
  // State
  const [expandedID, setExpandedID] = useState("");

  // Redux Selector
  const search: SearchState = useSelector(
    (state: RootStateOrAny) => state.search
  );

  // Event Handlers
  const handleDetails = (id: string) => setExpandedID(id);

  const { isLoading, movies, error } = search;

  const renderMovies = () => {
    if (movies && movies.length > 0) {
      return movies.map((movie: Movie, index: number) => {
        return (
          <MovieCard
            key={`${movie.imdbID}_${index}`}
            imdbID={movie.imdbID}
            poster={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            handleDetails={handleDetails}
            className={expandedID === movie.imdbID ? "card-full-width" : ""}
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
    </div>
  );
};

export default Home;
