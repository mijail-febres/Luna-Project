import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader"
import MainFooter from "../../components/MainFooter/MainFooter"
import RestaurantBanner from "../../components/RestaurantBanner/RestaurantBanner"

function Restaurant() {
  return (
    <>
    <MainHeader/>
    <RestaurantBanner/>
    <MainFooter/>
    </>
  );
}

export default Restaurant;
