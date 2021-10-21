import React from "react";
import laderachpic from "../../assets/LaderachPic.png";
//fetch from Google API instead if we have time in the end
import pin from "../../assets/pin.svg";
import phone from "../../assets/phone.svg";
import web from "../../assets/web.svg";

import {
  RestoImage,
  OpaqueOverlay,
  NameBox,
  RestoName,
  RestoCategory,
  RatingAndReviews,
  RestoRating,
  RestoReviews,
  AddressBox,
  Address,
  Pin,
  Phone,
  PhoneImg,
  Website,
  WebsiteImg,
} from "../CreateReviewBanner/CreateReviewBannerStyled";
import styled from "styled-components";

// import RestoImage from user directory path. Add src={}
const RestaurantBannerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  left: 0;
  top: 0;
`;

const CreateReviewBanner = () => {
  return (
    <RestaurantBannerWrapper>
      <RestoImage src={laderachpic} alt="laderach" />
      <OpaqueOverlay>
        <NameBox>
          <RestoName>import restoname here</RestoName>
          <RestoCategory>import category here</RestoCategory>
          <RatingAndReviews>
            <RestoRating>rating here</RestoRating>
            <RestoReviews># reviews</RestoReviews>
          </RatingAndReviews>
        </NameBox>
      </OpaqueOverlay>

    </RestaurantBannerWrapper>
  );
};

export default CreateReviewBanner;
