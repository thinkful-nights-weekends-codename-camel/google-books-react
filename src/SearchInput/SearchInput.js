import React, { Component } from "react";

class SearchInput extends Component {
  render() {
    return (
      <form className="searchform__form">
        <label htmlFor="search">
          Search:
          <input type="text" name="search" id="search" placeholder="henry" />
        </label>
        <button>Search</button>
      </form>
    );
  }
}

export default SearchInput;
