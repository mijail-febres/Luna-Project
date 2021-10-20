import React from "react";
import {
    SearchHeaderAndTitle,
    FoodImage,
    SearchBar,
    SearchInput,
    SearchButton,
} from "../SearchHomepage/SearchHomepageStyled";

const SearchHomepage = () => {

  return (
    <SearchHeaderAndTitle>
        <FoodImage>
            <SearchBar>
                <SearchInput placeholder="Search..."/>
                <SearchButton>Search</SearchButton>
            </SearchBar>
        </FoodImage>
    </SearchHeaderAndTitle>
  );
};

export default SearchHomepage;