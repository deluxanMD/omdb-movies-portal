import React from "react";

// Redux
import { RootStateOrAny, useSelector } from "react-redux";
import { Movie, SearchState } from "../store/types/searchTypes";

// Components
import InfoBox from "../components/InfoBox";
import Loader from "../components/Loader";
import Card from "../components/Card";

const Home = () => {
  const search: SearchState = useSelector(
    (state: RootStateOrAny) => state.search
  );

  const renderMovies = () => {
    const { movies } = search;

    if (movies.length > 0) {
      return movies.map((movie: Movie) => {
        console.log(movie);
        return <Card />;
      });
    }
  };

  return (
    <div className="homepage">
      {search.movies.length < 1 && (
        <InfoBox
          info="Welcome to OMDB Search, search something in the bar above!"
          variant="info"
        />
      )}
      {search.isLoading ? (
        <Loader />
      ) : (
        <div className="homepage-movie-container">{renderMovies()}</div>
      )}
    </div>
  );
};

export default Home;
