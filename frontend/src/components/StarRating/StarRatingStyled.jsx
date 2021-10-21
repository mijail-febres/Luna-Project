import React from "react";
import styled from "styled-components";

const RatingContainer = styled.div`
    height: ${({height}) => height? `${height}px`:'300px'};
    width: ${({width}) => width? `${width}px`:'300px'};
    background-color: #EBEBEB;
    box-sizing: border-box;
    border: 1px solid white;
    display: flex;
    #starscontainer {
        width: 100%;
        height: 100%; 
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: content-box;
        border: 1px solid white;
        .StarContainer {
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }
`
export default RatingContainer