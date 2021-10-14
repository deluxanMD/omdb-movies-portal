import React, { useState } from "react";

// Redux
import { useDispatch } from "react-redux";
import { getMovies, clearMovies } from "../store/actions/searchActions";
import { clearMovieDetails } from "../store/actions/detailActions";

// Components
import TextInput from "./TextInput";
import Buttons from "./Buttons";

const TopHeader = () => {
  // States
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  // Redux
  const dispatch = useDispatch();

  // Event Handlers
  const handleChange = (e: any) => setSearchText(e.target.value);

  const handleClick = () => dispatch(getMovies(searchText, page));

  const handleClear = () => {
    dispatch(clearMovies());
    dispatch(clearMovieDetails());
    setSearchText("");
    setPage(1);
  };

  return (
    <div className="top-header">
      <h2 onClick={handleClear}>OMDB Search</h2>
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
