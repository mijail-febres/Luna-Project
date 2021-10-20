import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import RestaurantBanner from "../../components/RestaurantBanner/RestaurantBanner";
import RestaurantInfo from "../../components/RestaurantInfo/RestaurantInfo";
import styled from "styled-components";

const RestaurantBodyWrapper = styled.div`
  position: absolute;
  top: 71px;
  left: 0;
  overflow: hidden;
`;

function Restaurant() {
  return (
    <>
      <MainHeader />
      <RestaurantBodyWrapper>
        {/* <RestaurantBanner /> */}
        <RestaurantInfo />
      </RestaurantBodyWrapper>
      <MainFooter />
    </>
  );
}

export default Restaurant;
