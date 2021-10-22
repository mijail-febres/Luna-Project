import React, { useEffect } from "react";
import { useState } from "react";
import {
  SearchHeader,
  SearchField,
  LineBetween,
  SelectCategory,
} from "../SearchSubheader/SearchSubheaderStyled";
import store from '../../store/index'

const SearchSubHeader = (props) => {
  const [search, setSearch] = useState("");

  useEffect(()=>{
    let newState =store.getState();
    if (newState.restaurants.search !== '') {
      setSearch(newState.restaurants.search)
    }
  },[]);

  const handleChange = (event) => {
    props.onChange(event.target.value)
    setSearch(event.target.value)
  }
  return (
    <SearchHeader>
      <SearchField
        placeholder="         Search"
        // value= {this.state.query} //use this for logic 
        onChange= {(event) => handleChange(event)} //use this for logic 
        value = {search}
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
