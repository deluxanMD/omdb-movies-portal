import React from "react";

// Component
import Card from "./Card";
import Buttons from "./Buttons";

// Assets
import NA_Image from "../assets/images/not-available.jpg";

interface IProps {
  imdbID: string;
  poster: string;
  title: string;
  year: string;
  handleDetails: (id: string) => void;
  className?: string;
}

const MovieCard = (props: IProps) => {
  const { imdbID, poster, title, year, handleDetails, className } = props;

  return (
    <Card className={className}>
      {poster === "N/A" ? (
        <img src={NA_Image} alt={title} />
      ) : (
        <img src={poster} alt={title} />
      )}
      <div className="metadata">
        <h5>{title}</h5>
        <div className="detail-container">
          <span className="year">{year}</span>
          <Buttons text="Details" onClick={() => handleDetails(imdbID)} />
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
