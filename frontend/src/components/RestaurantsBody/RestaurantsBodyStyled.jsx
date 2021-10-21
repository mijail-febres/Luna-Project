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
    #restaurantContainer{
        margin: 20px;
        box-sizing: content-box;
        :hover {
            cursor: pointer;
        }
    }
`;

export default RestaurantsBodyContainer;