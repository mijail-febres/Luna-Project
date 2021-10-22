import React from "react";
import {
    RestaurantReviewsWrapper,
    UserReviewWrapper,
    UserProfile,
    Avatar,
    NameAndNumberReviews,
    Name,
    NumberReviews,
    StarsGiven,
    DateCreated,
    LineBetween,
    ReviewText,
    CommentsAndLikes,
    ButtonWrapper,
    ViewComments,
} from "../RestaurantReviews/RestaurantReviewsStyled";
import like from "../../assets/like.png";
import line from '../../assets/LineUserReview.png';
// import CreateReviewComment from "../../components/CreateReviewComment/CreateReviewComment";
import FilterReviews from '../../components/FilterReviews/FilterReviews';
import { 
    LikeButtonLeft,
    LikeButtonRight
 } from "../DefaultButton/DefaultButtonStyled";


const RestaurantReviews = () => {

  return (
      <RestaurantReviewsWrapper>
        <FilterReviews/>
        <UserReviewWrapper>
                <UserProfile>
                    <Avatar/>
                    <NameAndNumberReviews>
                        <Name>Laurent H</Name>
                        <NumberReviews> # reviews </NumberReviews>
                    </NameAndNumberReviews>
                    <StarsGiven>STAR STAR STAR</StarsGiven>
                    <DateCreated>01.04.2021</DateCreated>
                </UserProfile>
                <LineBetween src={line} alt=""/>
                <ReviewText>This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. 
                    The people there seem to be quite good and helpful in their service.
                </ReviewText>
                <CommentsAndLikes>
                    <ButtonWrapper>
                        <LikeButtonLeft>
                            <img src={like} alt="thumbs up" />
                            # likes
                        </LikeButtonLeft>
                        <LikeButtonRight>
                            Comments #
                        </LikeButtonRight>
                    </ButtonWrapper>
                    <ViewComments>View all comments</ViewComments>
                </CommentsAndLikes>
        </UserReviewWrapper>
        {/* <CreateReviewComment/> */}
      </RestaurantReviewsWrapper>
  );
};

export default RestaurantReviews;