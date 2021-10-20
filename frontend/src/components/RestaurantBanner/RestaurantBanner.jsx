import React from "react";
import laderachpic from "../../assets/LaderachPic.png";
import googlemap from "../../assets/map.png"
//fetch from Google API instead if we have time in the end
import pin from "../../assets/pin.svg"
import phone from "../../assets/phone.svg"
import web from "../../assets/web.svg"

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
    WebsiteImg
} from "../RestaurantBanner/RestaurantBannerStyled";

// import RestoImage from user directory path. Add src={} 

const RestaurantBanner = () => {

  return (
    <>
    <RestoImage src={laderachpic} alt="laderach"/>
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
    <AddressBox>
        <GoogleMap src={googlemap} alt="location"/>  
        <Address>
            <Pin src={pin} alt="address"/>
            <p>address here</p>
        </Address> 
        <Phone>
            <PhoneImg src={phone} alt="phone number"/>
            <p>phone number here</p>
        </Phone>
        <Website>
            <WebsiteImg src={web} alt="website"/>
            <p>website here</p>
        </Website>
    </AddressBox>

    </>
  );
};

export default RestaurantBanner;