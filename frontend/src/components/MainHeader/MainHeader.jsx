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
    LineUnderHeader
} from "../MainHeader/MainHeaderStyled";
import lunalogo from "../../assets/LUNA.png"
import headerline from "../../assets/HeaderLine.png"
// import { Link } from "react-router-dom";



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
            <LunaLogo src={lunalogo}/>
        </HeaderLeft>

        <HeaderRight>
            <Home>Home</Home>
            <Search>Search</Search>
            <Profile>Profile</Profile>
            <Buttons>
                <SignUp>SIGNUP</SignUp>
                <Line/>
                <Login>LOGIN</Login>
            </Buttons>
        </HeaderRight>
    </MenuBar>

    <LineUnderHeader src={headerline}/>
    </>
  );
};

export default MainHeader;
