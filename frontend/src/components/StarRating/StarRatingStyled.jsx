import React from "react";
import styled from "styled-components";

const RatingContainer = styled.div`
    height: ${({height}) => height? `${height}px`:'300px'};
    width: ${({height}) => height? `${height*5}px`:'300px'};
    box-sizing: border-box;
    display: flex;
    #starscontainer {
        width: 100%;
        height: 100%; 
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: content-box;
        background-color: transparent;
        .StarContainer1 {
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`
export default RatingContainer