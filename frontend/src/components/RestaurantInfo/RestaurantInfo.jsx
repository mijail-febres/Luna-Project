import React from "react";
import clock from "../../assets/clock.svg";
import money from "../../assets/money.svg";
import { useHistory } from "react-router-dom";
import {
  RestaurantInfoWrapper,
  RestaurantInfoRow,
  RestaurantInfoText,
  RestaurantInfoButtonRow,
  ClockIcon,
  MoneyIcon,
} from "./RestaurantInfoStyled";

import { RestaurantInfoGenericButton } from "../DefaultButton/DefaultButtonStyled";

const RestaurantInfo = (props) => {
  const history = useHistory();

  const handleClickReview = () => {
    history.push(`/review/${props.restaurantId}/`);
  };

  const handleClickEdit = () => {
    history.push(`/newrestaurant/`);
  };

  const generatePriceLevelString = (price) => {
    if (price === 1) {
      return "$";
    } else if (price === 2) {
      return "$$";
    } else if (price === 3) {
      return "$$$";
    } else if (price === 4) {
      return "$$$$";
    } else if (price === 5) {
      return "$$$$$";
    }
  };

  return (
    <>
      <RestaurantInfoWrapper>
        <RestaurantInfoRow>
          <ClockIcon src={clock} alt="clock" />
          <RestaurantInfoText>{props.openingHours}</RestaurantInfoText>
        </RestaurantInfoRow>
        <RestaurantInfoRow>
          <MoneyIcon src={money} alt="money" />
          <RestaurantInfoText>
            {generatePriceLevelString(props.priceLevel)}
          </RestaurantInfoText>
        </RestaurantInfoRow>
        <RestaurantInfoButtonRow>
          <RestaurantInfoGenericButton onClick={() => handleClickReview()}>
            WRITE A REVIEW
          </RestaurantInfoGenericButton>
          <RestaurantInfoGenericButton onClick={() => handleClickEdit()}>
            EDIT DATA
          </RestaurantInfoGenericButton>
        </RestaurantInfoButtonRow>
      </RestaurantInfoWrapper>
    </>
  );
};

export default RestaurantInfo;
