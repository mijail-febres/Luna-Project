import styled from "styled-components";

const ReviewFormContainer = styled.div`
  z-index: 10;
  width: 100%;
  height: 465px;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  #main {
    width: 832px;
    height: 431px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #header {
      width: 100%;
      height: 96px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      #selectRating {
        padding: 10px;
      }
    }
    #body {
      width: 100%;
      height: 265px;
      display: flex;
      justify-content: center;
      align-items: center;
      #review {
        width: 100%;
        height: 100%;
        border: solid 1px #e3e3e3;
      }
    }
    #footer {
      width: 100%;
      height: 75px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default ReviewFormContainer;
