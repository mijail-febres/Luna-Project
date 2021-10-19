import React from "react";
import { UserNavigationWrapper, CommentIcon, EditIcon, RestaurantIcon, StarIcon } from "./UserNavigationColumnStyled";
import comment from "../../assets/comment.svg";
import edit from "../../assets/edit.svg";
import restaurant from "../../assets/restaurant.svg";
import star from "../../assets/star.svg";

const UserNavigationColumn = () => {
  return (
    <UserNavigationWrapper>
      Hello comment
      <CommentIcon src={comment} alt="comment" />
      <EditIcon src={edit} alt="edit" />
      <RestaurantIcon src={restaurant} alt="restaurant" />
      <StarIcon src={star} alt="star" />
    </UserNavigationWrapper>
  );
};

export default UserNavigationColumn;
