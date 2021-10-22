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
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import laderachpic from "../../assets/LaderachPic.png";
import { setSearch } from '../../store/actions';

const SearchHomepage = (props) => {
  const dispatch = useDispatch();
  const [HomeSearch, setHomeSearch] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    setHomeSearch(event.target.value);
    dispatch(setSearch(event.target.value));
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
            value={HomeSearch}
          />
          <SearchButton onClick={handleSearchClick}>Search</SearchButton>
        </SearchBar>
      </FoodImage>
    </SearchHeaderAndTitle>
  );
};

export default SearchHomepage;
