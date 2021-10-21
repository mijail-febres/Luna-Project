import React from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import RestaurantBanner from "../../components/RestaurantBanner/RestaurantBanner"
import RestaurantInfo from "../../components/RestaurantInfo/RestaurantInfo"
import RestaurantReviews from "../../components/RestaurantReviews/RestaurantReviews"
import {RestaurantReviewsInfo, RestaurantWrapper} from "../../Pages/Restaurant/indexStyled"

function Restaurant() {
  return (
    <RestaurantWrapper>
      <MainHeader/>
      <RestaurantBanner/>
      <RestaurantReviewsInfo>
          <RestaurantReviews/>
          <RestaurantInfo/>
      </RestaurantReviewsInfo>
      <MainFooter/>
    </RestaurantWrapper>
  );
}

export default Restaurant;