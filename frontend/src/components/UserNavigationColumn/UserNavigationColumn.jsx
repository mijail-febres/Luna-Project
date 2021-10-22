import React from "react";
import {
  UserNavigationWrapper,
  UserNavigationRow,
  UserNavigataionRowOne,
  UserNavigataionRowTwo,
  UserNavigataionRowThree,
  UserNavigataionRowFour,
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
      <UserNavigataionRowOne
        onClick={() => props.setStage(0)}
        stage={props.stage}
      >
        <StarIcon src={star} alt="star" />
        <UserNavigationRowText>Reviews</UserNavigationRowText>
      </UserNavigataionRowOne>
      <UserNavigataionRowTwo
        onClick={() => props.setStage(1)}
        stage={props.stage}
      >
        <CommentIcon src={comment} alt="comments" />
        <UserNavigationRowText>Comments</UserNavigationRowText>
      </UserNavigataionRowTwo>
      <UserNavigataionRowThree
        onClick={() => props.setStage(2)}
        stage={props.stage}
      >
        <RestaurantIcon src={restaurant} alt="restaurant" />
        <UserNavigationRowText>Restaurants</UserNavigationRowText>
      </UserNavigataionRowThree>
      <UserNavigataionRowFour
        onClick={() => props.setStage(3)}
        stage={props.stage}
      >
        <EditIcon src={edit} alt="edit" />
        <UserNavigationRowText>Edit Profile</UserNavigationRowText>
      </UserNavigataionRowFour>
    </UserNavigationWrapper>
  );
};

export default UserNavigationColumn;
