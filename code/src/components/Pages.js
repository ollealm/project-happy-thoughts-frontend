import React from "react";
import "./pages.css";

export const Pages = ({ setPage, page, pages, total, loading }) => {
  const increment = () => {
    setPage(page + 1);
  };
  return (
    <>
      {!loading && (
        <div className="pages">
          <p className="pages-text">
            Page {pages} of {total}
          </p>
          <button onClick={increment}>Next page</button>
        </div>
      )}
    </>
  );
};
