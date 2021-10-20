import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import RestaurantBanner from "../../components/RestaurantBanner/RestaurantBanner";
import RestaurantInfo from "../../components/RestaurantInfo/RestaurantInfo";
import styled from "styled-components";

const RestaurantPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

function Restaurant() {
  return (
    <RestaurantPageWrapper>
      <MainHeader />
      {/* <RestaurantBanner /> */}
      <RestaurantInfo />
      <MainFooter />
    </RestaurantPageWrapper>
  );
}

export default Restaurant;
