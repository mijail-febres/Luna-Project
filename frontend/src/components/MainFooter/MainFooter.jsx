import React from "react";
import {
    FooterTopBar,
    TopLeft,
    AboutUs,
    Press,
    Blog,
    IOS,
    Android,
    TopRight,
    Facebook,
    Twitter,
    Google,
    Instagram,
    LineBetween,
    FooterBottomBar,
    CopyRightImg,
    FooterWraper
} from "../MainFooter/MainFooterStyled";
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"
import google from "../../assets/googleplus.svg"
import instagram from "../../assets/instagram.svg"
import footerline from "../../assets/FooterLine.png"
import copyright from "../../assets/copyright.png"
// import { Link } from "react-router-dom";


const MainFooter = () => {

    // const homeHandler = () => {
    //     check later how

    // };
    // const searchHandler = () => {
    //     history.push("/search");
    // }


  return (
    <>
    <FooterTopBar>
        <TopLeft>
            <AboutUs>About Us</AboutUs>
            <Press>Press</Press>
            <Blog>Blog</Blog>
            <IOS>iOS</IOS>
            <Android>Android</Android>
        </TopLeft>

        <TopRight>
            <Facebook src={facebook} alt="fb"/>
            <Twitter src={twitter} alt="tw"/>
            <Google src={google} alt="google"/>
            <Instagram src={instagram} alt="ig"/>
        </TopRight>
    </FooterTopBar>

    <LineBetween src={footerline}/>

    <FooterBottomBar>
        <CopyRightImg src={copyright} alt="Copyright Luna"/>
    </FooterBottomBar>
    </>
  );
};

export default MainFooter;