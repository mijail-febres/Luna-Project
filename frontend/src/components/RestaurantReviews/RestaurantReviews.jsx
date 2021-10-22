import React from "react";
// import { useState } from "react";
import {
  RestaurantReviewsWrapper,
  UserReviewWrapper,
  UserReview,
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
  Line,
} from "../RestaurantReviews/RestaurantReviewsStyled";
import like from "../../assets/like.png";
import line from "../../assets/LineUserReview.png";
// import CreateReviewComment from "../../components/CreateReviewComment/CreateReviewComment";
import FilterReviews from "../../components/FilterReviews/FilterReviews";
import {
  LikeButtonLeft,
  LikeButtonRight,
} from "../DefaultButton/DefaultButtonStyled";
import StarRating from "../StarRating/StarRating";

const RestaurantReviews = (props) => {
  const handleClickReview = () => {
    //just a placeholder for now. this should trigger css change to show relevant comments on review
    console.log();
  };

  return (
    <RestaurantReviewsWrapper>
      <UserReview>
        <UserProfile>
          <Avatar src={props.avatar} alt="avatar" />
          <NameAndNumberReviews>
            <Name>{props.name}</Name>
            <NumberReviews> {props.total_reviews} reviews </NumberReviews>
          </NameAndNumberReviews>
          <StarsGiven>
            <StarRating
              height="25"
              width="125"
              review="false"
              stars={props.rating}
            />
          </StarsGiven>
          <DateCreated>{props.created}</DateCreated>
        </UserProfile>
        <LineBetween src={line} alt="" />
        <ReviewText>{props.text_content}</ReviewText>
        <CommentsAndLikes>
          <ButtonWrapper>
            <LikeButtonLeft>
              <img src={like} alt="thumbs up" />
              {props.like_count} likes
            </LikeButtonLeft>
            <LikeButtonRight>Comments {props.comments}</LikeButtonRight>
          </ButtonWrapper>
          <ViewComments onClick={() => handleClickReview()}>
            View all comments
          </ViewComments>
        </CommentsAndLikes>
      </UserReview>
      <Line src={line} alt="" />
      {/* <CreateReviewComment/> */}
    </RestaurantReviewsWrapper>
  );
};

export default RestaurantReviews;
