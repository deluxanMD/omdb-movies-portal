import React, { useState } from "react";

// Components
import TextInput from "./TextInput";
import Buttons from "./Buttons";

const TopHeader = () => {
  // States
  const [searchText, setSearchText] = useState("");

  // Event Handlers
  const handleChange = (e: any) => setSearchText(e.target.value);
  const handleClick = () => console.log("clicked");

  return (
    <div className="top-header">
      <h2>OMDB Search</h2>
      <div className="top-header-search-container">
        <TextInput
          type="text"
          hint="search text"
          value={searchText}
          onChange={handleChange}
        />
        <Buttons text="Search" onClick={handleClick} />
      </div>
    </div>
  );
};

export default TopHeader;
