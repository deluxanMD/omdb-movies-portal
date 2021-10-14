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

  const handleDropdown = (event: any) => {
    dispatch(getMovies(search.searchText, event.target.value));
    setCurrentPage(event.target.value);
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
              disabled={page === currentPage}
            />
          );
        } else {
          if (page <= 10) {
            return (
              <Buttons
                key={page}
                text={page.toString()}
                onClick={() => handlePagination(page)}
                disabled={page === currentPage}
              />
            );
          } else if (page > length - 10) {
            return (
              <Buttons
                key={page}
                text={page.toString()}
                onClick={() => handlePagination(page)}
                disabled={page === currentPage}
              />
            );
          } else {
            return <p>.</p>;
          }
        }
      }),
    ];
  };

  const renderPaginationMobile = () => {
    return (
      <select onChange={handleDropdown} value={currentPage}>
        {[
          Array.from({ length }, (_, index) => index + 1).map(
            (page: number) => {
              return (
                <option key={page} value={page}>
                  {page}
                </option>
              );
            }
          ),
        ]}
      </select>
    );
  };

  return (
    <Fragment>
      <div className="homepage-pagination">
        <Buttons
          text={"First"}
          onClick={() => handlePagination(1)}
          disabled={currentPage === 1 ? true : false}
        />
        <div className="homepage-pagination-cotainer">{renderPagination()}</div>
        <div className="homepage-pagination-cotainer-mobile">
          {renderPaginationMobile()}
        </div>
        <Buttons
          text={"Last"}
          onClick={() => handlePagination(length)}
          disabled={currentPage === length ? true : false}
        />
      </div>
      <br />
    </Fragment>
  );
};

export default Pagination;
