import React from "react";
import {
  UserCommentsWrapper,
  UserCommentsTopRow,
  UserCommentsName,
  UserCommentsText,
  UserCommentsDatetime,
} from "./UserCommentsStyled";

const UserComments = () => {
  return (
    <UserCommentsWrapper>
      <UserCommentsTopRow>
        <UserCommentsName> David Furrer </UserCommentsName>
        <UserCommentsDatetime> 01.01.2018 15:22 </UserCommentsDatetime>
      </UserCommentsTopRow>
      <UserCommentsText> Actually you have no taste! </UserCommentsText>
    </UserCommentsWrapper>
  );
};

export default UserComments;
