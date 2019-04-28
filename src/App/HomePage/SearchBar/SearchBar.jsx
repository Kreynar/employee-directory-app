import React from "react";

import "./SearchBar.scss";

const SearchBar = ({ onInput, placeholder }) => (
  <div className="search-bar">
    <input
      type="text"
      onInput={event => onInput(event.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default SearchBar;
