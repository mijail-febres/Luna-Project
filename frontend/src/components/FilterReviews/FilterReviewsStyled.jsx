import styled from "styled-components";
import {RestaurantInfoGenericButton} from "../DefaultButton/DefaultButtonStyled"

export const FilterReviewsWrapper = styled.div`
  width: 45vw;
  display: flex;
  position: fixed;
  align-items: center;
  left: 9vw;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 16%;
  border: 1px solid #EBEBEB;
  margin-right: 1vw;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  padding-left: 10px;
`;

export const FilterButton = styled(RestaurantInfoGenericButton)`
  width: 120px;
`
