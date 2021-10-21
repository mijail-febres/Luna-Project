import React from "react";

import {
  FilterReviewsWrapper,
  SearchBar,
  SearchInput,
} from "./FilterReviewsStyled";

import { RestaurantInfoGenericButton } from "../DefaultButton/DefaultButtonStyled";

const FilterReviews = () => {
  return (
    <>
      <FilterReviewsWrapper>
        <SearchBar>
          <SearchInput placeholder="Filter List..." />
        </SearchBar>
        <RestaurantInfoGenericButton>Filter</RestaurantInfoGenericButton>{" "}
      </FilterReviewsWrapper>
    </>
  );
};

export default FilterReviews;
