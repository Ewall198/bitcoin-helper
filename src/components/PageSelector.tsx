import React from "react";

const MAX_PAGE_NUMBER_PER_SIDE = 3; // The max number of pages before or after this page which can be clicked.

/**
 * Allow user to change the page of an element which supports pagination.
 */
const PageSelector = ({
  currentPage,
  lastPage,
  setPage,
}: {
  currentPage: number;
  lastPage: number;
  setPage: (page: number) => void;
}) => {
  if (lastPage === 1) {
    return <button>1</button>;
  }
  return (
    <div>
      {currentPage > 2 && <button onClick={() => setPage(1)}>{"<<"}</button>}
      {currentPage > 1 && (
        <button onClick={() => setPage(currentPage - 1)}>{"<"}</button>
      )}
      <button>{currentPage}</button>
      {currentPage < lastPage && (
        <button onClick={() => setPage(currentPage + 1)}>{">"}</button>
      )}
      {currentPage < lastPage - 1 && (
        <button onClick={() => setPage(lastPage)}>{">>"}</button>
      )}
    </div>
  );
};

export default PageSelector;
