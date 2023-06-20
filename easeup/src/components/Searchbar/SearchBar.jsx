import React from "react";
import "./SearchBar.css";

const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => {
  return (
    <>
      <div className="searchbar-wrap">
        <form onSubmit={formSubmit}>
          <input
            type="text"
            onChange={handleSearchKey}
            placeholder="Search by Category"
            value={value}
          />
          {value && <span onClick={clearSearch}>X</span>}

          <button>Go</button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
