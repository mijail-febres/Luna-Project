import styled from "styled-components";

export const RestaurantReviewsWrapper = styled.div`
  width: 45vw;
  left: 9vw;
  //height: 30vh;
  display: flex;
  flex-direction: column;
  z-index: 4;
`;

// export const UserReviewWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     background: white;
//     overflow: auto;
//     scroll-behavior: smooth;
//     margin-top: 5vh;
//     justify-content: space-between;
//     height: 100%;
// `

export const UserReview = styled.div`
  display: flex;
  width: 100%;
  //height:100%;
  background: white;
  flex-direction: column;
  margin-bottom: 1vh;
`;

export const UserProfile = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  display: flex;
  width: 66px;
  height: 66px;
`;

export const NameAndNumberReviews = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  padding-top: 8px;
`;

export const Name = styled.div`
  display: flex;
  color: #e47d31;
  font-size: 20px;
  font-weight: bold;
`;

export const NumberReviews = styled.div`
  display: flex;
  color: #4c4c4c;
  font-size: 14px;
  font-weight: bold;
`;

export const StarsGiven = styled.div`
  display: flex;
  padding-left: 5%;
  align-self: center;
`;

export const DateCreated = styled.div`
  display: flex;
  color: #000000;
  font-size: 14px;
  font-weight: 300;
  margin-right: 8px;
  position: absolute;
  right: 5px;
  padding-top: 8px;
`;

export const LineBetween = styled.img`
  display: flex;
  width: 100%;
`;

export const ReviewText = styled.div`
  display: flex;
  margin: 5px;
`;

export const CommentsAndLikes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const ViewComments = styled.div`
  display: flex;
  color: #e47d31;
  font-size: 16px;
  margin-right: 8px;
`;

export const Line = styled(LineBetween)`
  display: flex;
  width: 100%;
`;
