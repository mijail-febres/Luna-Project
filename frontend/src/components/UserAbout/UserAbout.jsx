import React from "react";
import {
  UserAboutWrapper,
  UserAboutTitle,
  UserAboutItemTitle,
  UserAboutContent,
} from "./UserAboutStyled";

const UserAbout = (props) => {
  const dateJoined = new Date(props.dateJoined);
  return (
    <UserAboutWrapper>
      <UserAboutTitle> ABOUT {props.firstName.toUpperCase()} </UserAboutTitle>
      <UserAboutItemTitle> Location </UserAboutItemTitle>
      <UserAboutContent>{props.location}</UserAboutContent>
      <UserAboutItemTitle> Luna member since </UserAboutItemTitle>
      <UserAboutContent>{`${dateJoined.getDate()} ${dateJoined.toLocaleString(
        "default",
        { month: "long" }
      )} ${dateJoined.getFullYear()}`}</UserAboutContent>
      <UserAboutItemTitle> Things I love </UserAboutItemTitle>
      <UserAboutContent>
        {Array.isArray(props.thingsUserLikes)
          ? props.thingsUserLikes.join(", ")
          : props.thingsUserLikes}
      </UserAboutContent>
      <UserAboutItemTitle> Description </UserAboutItemTitle>
      <UserAboutContent>{props.description}</UserAboutContent>
    </UserAboutWrapper>
  );
};

export default UserAbout;
