import React, { useState, useEffect } from "react";

// Component
import Card from "./Card";
import Buttons from "./Buttons";

// Assets
import NA_Image from "../assets/images/not-available.jpg";

// Types
import { Data, Rating } from "../store/types/detailType";

interface IProps {
  imdbID: string;
  poster: string;
  title: string;
  year: string;
  handleDetails: (id: string) => void;
  className?: string;
  details: Data;
}

const MovieCard = (props: IProps) => {
  // Props
  const { imdbID, poster, title, year, handleDetails, className, details } =
    props;

  // State
  const [detailView, setDetailView] = useState(false);

  // Lifecycle
  useEffect(() => {
    className === "card-full-width" && setDetailView(true);
  }, [className]);

  return (
    <Card className={className}>
      {poster === "N/A" ? (
        <img src={NA_Image} alt={title} />
      ) : (
        <img src={poster} alt={title} />
      )}
      <div className="metadata">
        <h5>{title}</h5>
        {detailView && details.imdbID === imdbID && (
          <div className="detail-content">
            <h6>Plot</h6>
            <p>{details.plot}</p>
            <br />
            <h6>Actors</h6>
            <p>{details.actors}</p>
            <br />
            <h6>Ratings</h6>
            {details.ratings.map((rating: Rating) => {
              return (
                <p>
                  - {rating.Source}: {rating.Value}
                </p>
              );
            })}
            <br />
          </div>
        )}
        <div className="detail-container">
          <span className="year">{year}</span>
          <Buttons text="Details" onClick={() => handleDetails(imdbID)} />
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
