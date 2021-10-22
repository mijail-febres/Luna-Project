import React from "react";

import {
  FilterReviewsWrapper,
  SearchBar,
  SearchInput,
  FilterButton,
} from "./FilterReviewsStyled";

//import { RestaurantInfoGenericButton } from "../DefaultButton/DefaultButtonStyled";

const FilterReviews = () => {
  return (
    <>
      <FilterReviewsWrapper>
        <SearchBar>
          <SearchInput placeholder="Filter List..." />
        </SearchBar>
        <FilterButton>Filter</FilterButton>{" "}
      </FilterReviewsWrapper>
    </>
  );
};

export default FilterReviews;
