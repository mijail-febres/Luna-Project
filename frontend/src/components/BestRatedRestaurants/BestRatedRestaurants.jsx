import React from "react";
import RestaurantPreview from "../RestaurantPreview/RestaurantPreview";
import {
  BestRated,
  FormTitle,
  UnderLineTitle,
  BestRatedBody
} from "../BestRatedRestaurants/BestRatedRestaurantsStyled"

const BestRatedRestaurants = () => {

  return (
    <BestRated>
        <FormTitle>BEST RATED RESTAURANTS</FormTitle>
        <UnderLineTitle/>
        <BestRatedBody>
            <RestaurantPreview/>
            <RestaurantPreview/>
            <RestaurantPreview/>
            <RestaurantPreview/>
        </BestRatedBody>
    </BestRated>
  );
};

export default BestRatedRestaurants;