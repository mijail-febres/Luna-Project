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
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/actions";

export const MainHeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const MainHeader = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const token = localStorage.getItem("luna-auth-token");

  const handleLogout = () => {
    localStorage.removeItem("luna-auth-token");
    dispatch(logOut());
    history.push("/");
  };
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
    <MainHeaderWrapper>
      <MenuBar>
        <HeaderLeft>
          <LunaLogo src={lunalogo} />
        </HeaderLeft>

        <HeaderRight>
          <Home>
            <Link to="/" className="mainHeaderLink">
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
            {token ? (
              <Login onClick={handleLogout}>
                <div className="mainHeaderLinkSignUpLogin">LOGOUT</div>
              </Login>
            ) : (
              <Login>
                <Link to="/login" className="mainHeaderLinkSignUpLogin">
                  LOGIN
                </Link>
              </Login>
            )}
          </Buttons>
        </HeaderRight>
      </MenuBar>

      <LineUnderHeader src={headerline} />
    </MainHeaderWrapper>
  );
};

export default MainHeader;
