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

const RestaurantInfo = () => {

  const history = useHistory();

  const handleClickReview = () => {
    history.push(`/review/`);
  };

  const handleClickEdit = () => {
    history.push(`/newrestaurant/`);
  };

  return (
    <>
      <RestaurantInfoWrapper>
        <RestaurantInfoRow>
          <ClockIcon src={clock} alt="clock" />
          <RestaurantInfoText>
            Monday-Friday 9:00 am - 8:00 pm
          </RestaurantInfoText>
        </RestaurantInfoRow>
        <RestaurantInfoRow>
          <MoneyIcon src={money} alt="money" />
          <RestaurantInfoText>Price level: $$$</RestaurantInfoText>
        </RestaurantInfoRow>
        <RestaurantInfoButtonRow>
        <RestaurantInfoGenericButton
        onClick={() => handleClickReview()}
        >WRITE A REVIEW</RestaurantInfoGenericButton>
        <RestaurantInfoGenericButton
        onClick={() => handleClickEdit()}
        >EDIT DATA</RestaurantInfoGenericButton>
        </RestaurantInfoButtonRow>
      </RestaurantInfoWrapper>
    </>
  );
};

export default RestaurantInfo;
