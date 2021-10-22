import styled from "styled-components";

export const RestaurantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
`;

export const RestaurantReviewsInfo = styled.div`
  display: flex;
  width: 100vw;
  position: absolute;
  top: 43vh;
  flex-direction: row;
  background: #f2f2f2;
  //padding-top: 15px;
`;

export const RestaurantRevWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  /* margin-top: 8vh; */
  width: 45vw;
  position: absolute;
  top: 5vh;
  left: 9vw;
  z-index: 0;

  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    display: none;
  }
`;
