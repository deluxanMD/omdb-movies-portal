import React, { Fragment, useState } from "react";

// Redux
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/actions/searchActions";
import { SearchState } from "../store/types/searchTypes";

// Components
import Buttons from "./Buttons";

interface IProps {
  total: number;
  perPage: number;
}

const Pagination = (props: IProps) => {
  const { total, perPage } = props;

  const length: number = total / perPage;

  // State
  const [currentPage, setCurrentPage] = useState(1);

  // Redux
  const search: SearchState = useSelector(
    (state: RootStateOrAny) => state.search
  );
  const dispatch = useDispatch();

  const handlePagination = (page: number) => {
    dispatch(getMovies(search.searchText, currentPage));
    setCurrentPage(page);
  };

  const renderPagination = () => {
    return [
      Array.from({ length }, (_, index) => index + 1).map((page: number) => {
        if (length < 20) {
          return (
            <Buttons
              key={page}
              text={page.toString()}
              onClick={() => handlePagination(page)}
            />
          );
        } else {
          if (page <= 10) {
            return (
              <Buttons
                key={page}
                text={page.toString()}
                onClick={() => handlePagination(page)}
              />
            );
          } else if (page > length - 10) {
            return (
              <Buttons
                key={page}
                text={page.toString()}
                onClick={() => handlePagination(page)}
              />
            );
          } else {
            return <p>.</p>;
          }
        }
      }),
    ];
  };

  return (
    <Fragment>
      <div className="homepage-pagination">
        <p>{search.searchText}</p>
        <Buttons text={"First"} onClick={() => handlePagination(1)} />
        {renderPagination()}
        <Buttons text={"Last"} onClick={() => handlePagination(length)} />
      </div>
      <br />
    </Fragment>
  );
};

export default Pagination;
