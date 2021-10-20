import React from "react";
import {
  MenuBar,
  HeaderLeft,
  LunaLogo,
  HeaderRight,
  Home,
  Search,
  Profile,
  Buttons,
  SignUp,
  Line,
  Login,
  LineUnderHeader,
} from "../MainHeader/MainHeaderStyled";
import lunalogo from "../../assets/LUNA.png";
import headerline from "../../assets/HeaderLine.png";
import { Link } from "react-router-dom";

const MainHeader = () => {
  // const homeHandler = () => {
  //     check later how

  // };
  // const searchHandler = () => {
  //     history.push("/search");
  // }
  // const profileHandler = () => {
  //     history.push("/profile");
  // }
  // const signUpHandler = () => {
  //     history.push("/registration");
  // }
  // const loginHandler = () => {
  //     history.push("/login");
  // }

  return (
    <>
      <MenuBar>
        <HeaderLeft>
          <LunaLogo src={lunalogo} />
        </HeaderLeft>

        <HeaderRight>
          <Home>
            <Link to="/home" className="mainHeaderLink">
              Home
            </Link>
          </Home>
          <Search>
            <Link to="/search" className="mainHeaderLink">
              Search
            </Link>
          </Search>
          <Profile>
            <Link to="/profile" className="mainHeaderLink">
              Profile
            </Link>
          </Profile>
          <Buttons>
            <SignUp>
              <Link to="/registration" className="mainHeaderLinkSignUpLogin">
                SIGNUP
              </Link>
            </SignUp>
            <Line />
            <Login>
              <Link to="/login" className="mainHeaderLinkSignUpLogin">
                LOGIN
              </Link>
            </Login>
          </Buttons>
        </HeaderRight>
      </MenuBar>

      <LineUnderHeader src={headerline} />
    </>
  );
};

export default MainHeader;
