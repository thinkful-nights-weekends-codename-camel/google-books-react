import React, { Component } from "react";
import SearchInput from "../SearchInput/SearchInput";
import SearchFilter from "../SearchFilter/SearchFilter";

class SearchForm extends Component {
  render() {
    return (
      <div className="searchform">
        <SearchInput />
        <SearchFilter />
      </div>
    );
  }
}

export default SearchForm;
