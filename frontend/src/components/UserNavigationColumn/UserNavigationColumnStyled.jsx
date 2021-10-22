import styled from "styled-components";

export const UserNavigationWrapper = styled.div`
  width: 232px;
  background: white;
`;

export const UserNavigationRow = styled.div`
  width: 100%;
  height: 46.75px;
  display: flex;
  background: white;
  box-shadow: none;
  /* justify-content: center; */
  align-items: center;
  border-bottom: 1px gray solid;
`;

export const UserNavigataionRowOne = styled(UserNavigationRow)`
  box-shadow: ${(props) =>
    props.stage === 0 ? "-5px 0px 0px 0px orange" : "none"};
  background: ${(props) =>
    props.stage === 0 ? "rgba(0, 0, 0, 0.0837013)" : "none"};
`;
export const UserNavigataionRowTwo = styled(UserNavigataionRowOne)`
  box-shadow: ${(props) =>
    props.stage === 1 ? "-5px 0px 0px 0px orange" : "none"};
  background: ${(props) =>
    props.stage === 1 ? "rgba(0, 0, 0, 0.0837013)" : "none"};
`;

export const UserNavigataionRowThree = styled(UserNavigataionRowOne)`
  box-shadow: ${(props) =>
    props.stage === 2 ? "-5px 0px 0px 0px orange" : "none"};
  background: ${(props) =>
    props.stage === 2 ? "rgba(0, 0, 0, 0.0837013)" : "none"};
`;

export const UserNavigataionRowFour = styled(UserNavigataionRowOne)`
  box-shadow: ${(props) =>
    props.stage === 3 ? "-5px 0px 0px 0px orange" : "none"};
  background: ${(props) =>
    props.stage === 3 ? "rgba(0, 0, 0, 0.0837013)" : "none"};
`;

export const UserNavigationRowText = styled.div`
  font-weight: 300;
  font-size: 18px;
  color: #303030;
`;

export const CommentIcon = styled.img`
  margin-right: 15px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-left: 3%;
`;

export const EditIcon = styled.img`
  margin-right: 15px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-left: 3%;
`;

export const RestaurantIcon = styled.img`
  margin-right: 15px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-left: 3%;
`;

export const StarIcon = styled.img`
  margin-right: 15px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-left: 3%;
`;
