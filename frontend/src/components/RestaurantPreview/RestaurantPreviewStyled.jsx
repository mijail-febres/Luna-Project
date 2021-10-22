import styled from "styled-components";

const RestaurantPreviewContainer = styled.div`
    width: 270px; // this dimensions should be adjusted to 100% once we know who will contain it
    height: 410px;// this dimensions should be adjusted to 100% once we know who will contain it
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: #E47D31 5px solid;
    background-color: #FFFFFF;
;
    #header{
        width: 100%;
        height: 15%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        #name{
            font-size: 30px;
        }
    }
    #bodyStarRating{
        width: 100%;
        height: 15%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    #picture{
        width: 100%;
        height: 70%;
        display: flex;
        background-image: ${({image})=>`url(${image})`};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
        
`

export default RestaurantPreviewContainer