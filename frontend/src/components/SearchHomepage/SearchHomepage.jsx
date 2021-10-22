import React from "react";
import {
  SearchHeaderAndTitle,
  FoodImage,
  FoodImageWrapper,
  SearchBar,
  SearchInput,
  SearchButton,
} from "../SearchHomepage/SearchHomepageStyled";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import laderachpic from "../../assets/LaderachPic.png";

const SearchHomepage = (props) => {
  const [HomeSearch, setHomeSearch] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    setHomeSearch(event.target.value);
    console.log(HomeSearch);
  };

  const handleSearchClick = (event) => {
    event.preventDefault();
    console.log("clicked Search");
    history.push("/search/");
  };

  return (
    <SearchHeaderAndTitle>
      <FoodImage>
        <SearchBar>
          <SearchInput
            placeholder="Search..."
            onChange={(e) => {
              onChange(e);
            }}
          />
          <SearchButton onClick={handleSearchClick}>Search</SearchButton>
        </SearchBar>
      </FoodImage>
    </SearchHeaderAndTitle>
  );
};

export default SearchHomepage;
