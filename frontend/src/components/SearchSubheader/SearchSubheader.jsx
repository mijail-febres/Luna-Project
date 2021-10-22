import React from "react";
import {
  SearchHeader,
  SearchField,
  LineBetween,
  SelectCategory,
} from "../SearchSubheader/SearchSubheaderStyled";

const SearchSubHeader = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value)
  }
  return (
    <SearchHeader>
      <SearchField
        placeholder="         Search"
        // value= {this.state.query} //use this for logic 
        onChange= {(event) => handleChange(event)} //use this for logic 
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
