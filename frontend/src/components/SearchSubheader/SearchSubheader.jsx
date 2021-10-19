import React from "react";
import {
  SearchHeader,
  SearchField,
  LineBetween,
  SelectCategory,
} from "../SearchSubheader/SearchSubheaderStyled";

const SearchSubHeader = () => {
  return (
    <SearchHeader>
      <SearchField
        placeholder="         Search"
        // value= {this.state.query} //use this for logic 
        //onChange= //{this.handleSearch} //use this for logic 
      />
      <LineBetween />
      <SelectCategory
        placeholder="Select a category..."
        // value= {this.state.query} //use this for logic 
        //onChange={this.handleCategoryChoice} //use this for logic
      />
    </SearchHeader>
  );
};

export default SearchSubHeader;
