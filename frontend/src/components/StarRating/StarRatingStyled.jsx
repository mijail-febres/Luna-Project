import React from "react";
import styled from "styled-components";

const RatingContainer = styled.div`
    width: ${props => props.width? `${props.width}px` : '300px' };
    height: ${props => props.height? `${props.height}px` : '50px' };
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