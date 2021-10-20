import styled from "styled-components";

export const BestRated = styled.div`
    display:flex;
    position: absolute;
    align-items: center;
    top: 36vh;
    width: 100vw;
    flex-direction: column;
`;

export const FormTitle = styled.div`
    display:flex;
    position: absolute;
    top: 3vh;
    font-weight: bold;
    color: #4C4C4C;
    font-size: ${props => props.theme.fontLarge};
    margin-bottom: 10px;
`;

export const UnderLineTitle = styled.img`
    display:flex;
    position: absolute;
    top: 6.5vh;
    width: 13.89%;
    border: 2px solid #E47D31;
`;

export const BestRatedBody = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    left:9vw;
    top: 10vh;
    right: 9vw;
    justify-content: space-between;
    overflow: auto;
`