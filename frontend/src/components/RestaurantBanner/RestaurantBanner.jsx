import React from "react";
import laderachpic from "../../assets/LaderachPic.png";
import googlemap from "../../assets/map.png";
//fetch from Google API instead if we have time in the end
import pin from "../../assets/pin.svg";
import phone from "../../assets/phone.svg";
import web from "../../assets/web.svg";
import StarRating from "../StarRating/StarRating";

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
  GoogleMap,
  Address,
  Pin,
  Phone,
  PhoneImg,
  Website,
  WebsiteImg,
} from "../RestaurantBanner/RestaurantBannerStyled";
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
  z-index: 5;
`;

const RestaurantBanner = (props) => {
  return (
    <RestaurantBannerWrapper>
      <RestoImage src={props.image} alt="laderach" />
      <OpaqueOverlay>
        <NameBox>
          <RestoName>{props.name}</RestoName>
          <RestoCategory>{props.category}</RestoCategory>
          <RatingAndReviews>
            <StarRating
              height="25"
              width="125"
              review="false"
              stars={props.rating}
            />
            <RestoReviews>{`${props.numOfReviews} Reviews`}</RestoReviews>
          </RatingAndReviews>
        </NameBox>
      </OpaqueOverlay>
      <AddressBox>
        <GoogleMap src={googlemap} alt="location" />
        <Address>
          <Pin src={pin} alt="address" />
          <p>{props.country}</p>
        </Address>
        <Phone>
          <PhoneImg src={phone} alt="phone number" />
          <p>{props.phone}</p>
        </Phone>
        <Website>
          <WebsiteImg src={web} alt="website" />
          <p>{props.website}</p>
        </Website>
      </AddressBox>
    </RestaurantBannerWrapper>
  );
};

export default RestaurantBanner;
