import styled from "styled-components";

const ReviewsBodyContainer = styled.div`
    width: 100vw;
    box-sizing: content-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f2f2f2;
    overflow: auto;
    #reviewContainer{
        margin: 20px;
        width: 271px;
        height: 411px;
        overflow: hidden;
    }
`;

export default ReviewsBodyContainer;