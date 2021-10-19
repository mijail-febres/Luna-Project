import React from "react";
import {
  UserAboutWrapper,
  UserAboutTitle,
  UserAboutItemTitle,
  UserAboutContent,
} from "./UserAboutStyled";

const UserAbout = () => {
  return (
    <UserAboutWrapper>
      <UserAboutTitle> ABOUT DAVID </UserAboutTitle>
      <UserAboutItemTitle> Location </UserAboutItemTitle>
      <UserAboutContent>Zurich, CH</UserAboutContent>
      <UserAboutItemTitle> Luna member since </UserAboutItemTitle>
      <UserAboutContent>April, 2018</UserAboutContent>
      <UserAboutItemTitle> Things I love </UserAboutItemTitle>
      <UserAboutContent>Everything</UserAboutContent>
      <UserAboutItemTitle> Description </UserAboutItemTitle>
      <UserAboutContent>
        Im professional photographer with an eye for details in every thing I do
        in my live. Every time a pass by a nice restaurant i have to stop and
        take notes
      </UserAboutContent>
    </UserAboutWrapper>
  );
};

export default UserAbout;
