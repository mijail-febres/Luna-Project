import React from "react";
import {
  UserNavigationWrapper,
  UserNavigationRow,
  UserNavigationRowText,
  CommentIcon,
  EditIcon,
  RestaurantIcon,
  StarIcon,
} from "./UserNavigationColumnStyled";
import comment from "../../assets/comment.svg";
import edit from "../../assets/edit.svg";
import restaurant from "../../assets/restaurant.svg";
import star from "../../assets/star.svg";

const UserNavigationColumn = (props) => {
  return (
    <UserNavigationWrapper>
      <UserNavigationRow onClick={() => props.setStage(0)}>
        <StarIcon src={star} alt="star" />
        <UserNavigationRowText>Reviews</UserNavigationRowText>
      </UserNavigationRow>
      <UserNavigationRow onClick={() => props.setStage(1)}>
        <CommentIcon src={comment} alt="comments" />
        <UserNavigationRowText>Comments</UserNavigationRowText>
      </UserNavigationRow>
      <UserNavigationRow onClick={() => props.setStage(2)}>
        <RestaurantIcon src={restaurant} alt="restaurant" />
        <UserNavigationRowText>Restaurants</UserNavigationRowText>
      </UserNavigationRow>
      <UserNavigationRow onClick={() => props.setStage(3)}>
        <EditIcon src={edit} alt="edit" />
        <UserNavigationRowText>Edit Profile</UserNavigationRowText>
      </UserNavigationRow>
    </UserNavigationWrapper>
  );
};

export default UserNavigationColumn;
