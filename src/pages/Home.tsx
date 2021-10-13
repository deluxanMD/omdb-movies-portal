import React from "react";

// Components
import InfoBox from "../components/InfoBox";

const Home = () => {
  return (
    <div className="homepage">
      <InfoBox
        info="Welcome to OMDB Search, search something in the bar above!"
        variant="info"
      />
    </div>
  );
};

export default Home;
