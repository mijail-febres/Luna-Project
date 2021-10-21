import styled from "styled-components";

export const RestaurantReviewsWrapper = styled.div`
    width: 45vw;
    position: absolute;
    left: 9vw;
    display:flex;
    flex-direction: column;
`

export const UserReviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    overflow: auto;
    scroll-behavior: smooth;
    position: absolute;
    left: 0vh;
    top: 5vh;
`

export const UserProfile = styled.div`
    display: flex;
`

export const Avatar = styled.img`
    display: flex;    
    width: 66px;
    height: 66px;
`

export const NameAndNumberReviews = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    padding-top: 8px;
`

export const Name = styled.div`
    display: flex;    
    color: #E47D31;
    font-size: 20px;
    font-weight:bold;
`

export const NumberReviews = styled.div`
    display: flex;
    color: #4C4C4C;
    font-size: 14px;
    font-weight: bold;
`

export const StarsGiven = styled.div`
    display: flex;
    padding-left: 5%; 
    align-self: center;
`

export const DateCreated = styled.div`
    display: flex;
    color: #000000;
    font-size: 14px;
    font-weight: 300;
    margin-right: 8px;
    position: absolute;
    right: 5px;
    padding-top: 8px;
`

export const LineBetween = styled.img`
    display: flex;    
    width: 100%;
`

export const ReviewText = styled.div`
    display: flex;
    margin: 5px;

`

export const CommentsAndLikes = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`
export const ButtonWrapper = styled.div`
    display:flex;
    flex-direction: row;
    margin-bottom: 10px;
    margin-left: 10px;
`

export const ViewComments = styled.div`
    display:flex;
    color: #E47D31;
    font-size: 16px;
    margin-right: 8px;
`