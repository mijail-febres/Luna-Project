import React from "react";
import styled from "styled-components";

const RatingContainer = styled.div`
    height: ${({height}) => height? `${height}px`:'300px'};
    width: ${({width}) => width? `${width}px`:'300px'};
    box-sizing: content-box;
    #starscontainer {
        width: 100%;
        height: 100%; 
        display: flex;
        justify-content: center;
        align-items: center;
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