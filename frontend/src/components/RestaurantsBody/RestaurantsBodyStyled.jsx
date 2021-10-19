import styled from "styled-components";

const RestaurantsBodyContainer = styled.div`
    width: 100vw;
    box-sizing: content-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #f2f2f2;
    border: 1px solid green;
    #restaurantContainer{
        margin: 10px;
        :hover {
            cursor: pointer;
        }
    }
`;

export default RestaurantsBodyContainer;