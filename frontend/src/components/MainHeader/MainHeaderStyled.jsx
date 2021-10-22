import styled from "styled-components";
import { Link } from "react-router-dom";

//Header to always show on top of website
export const MenuBar = styled.div`
  z-index: 10;
  height: 71px;
  width: 100vw;
  display: flex;
  position: absolute;
  top: 0%;
  background: #ffffff;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 50vw;
`;

//left side of header: Luna logo
export const LunaLogo = styled.img`
  display: flex;
  position: absolute;
  height: 25px;
  left: 3%;
  cursor: pointer;
`;

//right side of header
export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50vw;
`;

//Home link
export const Home = styled.div`
  .mainHeaderLink {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #4a4a4a;
    cursor: pointer;
    text-decoration: none;
  }
  :hover {
    border-bottom: #e47d31 solid 2px;
    height: 40%;
  }
`;

//Search link
export const Search = styled(Home)``;

//Profile link
export const Profile = styled(Home)``;

//Button section: 2 buttons
export const Buttons = styled.div`
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;
  #button_left{
    display: flex;
    justify-content: center;
    align-items: center;
    .mainHeaderLinkSignUpLogin {
      text-decoration: none;
      color: #ffffff;
    }
  }
  .ButtonRight{
    display: flex;
    justify-content: center;
    align-items: center;
    .mainHeaderLinkSignUpLogin {
      text-decoration: none;
      color: #ffffff;
    }
  }
`;

//Signup button
export const SignUp = styled.div`
  display: flex;
  cursor: pointer;
  background-color: #e47d31;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 35px;
  border-bottom-left-radius: 40%;
  border-top-left-radius: 40%;
  cursor: pointer;
`;

export const Line = styled.div`
  width: 3px;
  height: 40.57px;
  border: 1px solid #ffffff;
`;

//Login button
export const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #e47d31;
  width: 100px;
  height: 35px;
  border-bottom-right-radius: 40%;
  border-top-right-radius: 40%;
  cursor: pointer;

  .mainHeaderLinkSignUpLogin {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const LineUnderHeader = styled.img`
  width: 100vw;
  top: 71px;
  position: absolute;
`;
