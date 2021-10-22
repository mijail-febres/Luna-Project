import styled from "styled-components";
import { StandardButton } from "../DefaultButton/DefaultButtonStyled";

export const SearchHeaderAndTitle = styled.div`
  display: flex;
  justify-content: center;
`;

export const FoodImage = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  position: absolute;
  top: 71px;
  align-items: center;
  justify-content: center;
  z-index: 0;
  background-image: url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 23vw;
  width: 50vw;
  height: 16%;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 70%;
  border: none;
  padding-left: 10px;
`;

export const SearchButton = styled(StandardButton)``;
