import React from "react";
import "./pages.css";

export const Pages = ({
  setCurrentPage,
  currentPage,
  pages,
  totalMessages,
  loading,
}) => {
  const increment = () => {
    setCurrentPage(Math.min(currentPage + 1, pages));
  };
  return (
    <>
      {!loading && (
        <div className="pages">
          <p className="pages-text">Page {currentPage}</p>
          {currentPage === pages ? (
            <p className="pages-text">No older posts</p>
          ) : (
            <button onClick={increment}>Show older posts</button>
          )}
        </div>
      )}
    </>
  );
};
