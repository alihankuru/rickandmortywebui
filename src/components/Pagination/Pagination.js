import React from 'react';

const Pagination = ({ pageNumber, setPageNumber, totalPages }) => {
  const handleNext = () => {
    setPageNumber((x) => (x < totalPages ? x + 1 : x));
  };

  const handlePrevious = () => {
    setPageNumber((x) => (x > 1 ? x - 1 : x));
  };

  return (
    <nav aria-label="...">
        <ul className="pagination justify-content-center">
  <li className={`page-item ${pageNumber === 1 ? 'disabled' : ''}`}>
  <button style={{ backgroundColor: 'black', color: 'white' }} className="page-link" onClick={handlePrevious}>
  Previous
</button>
  </li>
  {[...Array(totalPages)].map((_, index) => {
    const isFirstPage = index === 0;
    const isLastPage = index === totalPages - 1;
    const isCurrentPage = pageNumber === index + 1;
    const maxPagesToShow = 5;
    const isWithinRange = index + 1 >= pageNumber - Math.floor(maxPagesToShow / 2) &&
                          index + 1 <= pageNumber + Math.floor(maxPagesToShow / 2);

    if (isFirstPage || isLastPage || isWithinRange) {
      return (
        <li key={index} className={`page-item`} style={{ backgroundColor: isCurrentPage ? 'yellow' : '' }}>
          <button style={{ backgroundColor: 'black', color: 'white' }} className="page-link" onClick={() => setPageNumber(index + 1)}>
  {index + 1}
  {isCurrentPage && <span className="sr-only">(current page)</span>}
</button>
        </li>
      );
    } else if (isWithinRange && !isFirstPage) {
      // Show an ellipsis for pages that are not in the range but not the first page
      return (
        <li key={index} className="page-item disabled">
          <span className="page-link">...</span>
        </li>
      );
    }
    return null;
  })}
  <li className={`page-item ${pageNumber === totalPages ? 'disabled' : ''}`}>
  <button style={{ backgroundColor: 'black', color: 'white' }} className="page-link" onClick={handleNext}>
  Next
</button>
  </li>
</ul>
      </nav>
  );
};

export default Pagination;
