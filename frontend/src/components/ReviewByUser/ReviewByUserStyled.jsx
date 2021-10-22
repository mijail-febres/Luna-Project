import styled from "styled-components";

const ReviewByUserStyled = styled.div`
  width: 100%;
  height: 148px;
  box-sizing: content-box;
  font-family: Helvetica;
  font-weight: 400;
  font-size: 20px;
  color: #4c4c4c;
  border-bottom: 1px solid grey;

  #header {
    width: 100%;
    height: 23%;
    display: flex;
    justify-content: space-between;
    #name {
      font-size: 20px;
      justify-content: space-around;
    }
  }
  #review {
    width: 100%;
    height: 66px;
    font-size: 16px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }
`;
export default ReviewByUserStyled;
