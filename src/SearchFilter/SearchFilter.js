import React, { Component } from "react";

class SearchFilter extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="print-type">
            Print Type:
            <select>
              <option value="All">All</option>
            </select>
          </label>
          <label htmlFor="book-type">
            Book Type:
            <select>
              <option value="None">No Filter</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default SearchFilter;
