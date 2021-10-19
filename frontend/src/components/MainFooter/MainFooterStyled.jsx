import styled from "styled-components";

export const FooterTopBar = styled.div`
  width: 100vw;
  bottom: 37px;
  height: 56px;
  display: flex;
  align-items: center;
  flex-direction: row;
  position: absolute;
  background: #ffffff;
`;

export const TopLeft = styled.div`
  display: flex;
  position: absolute;
  width: 33%;
  justify-content: space-between;
  flex-direction: row;
  left: 3%;
`;

export const AboutUs = styled.div`
  color: #646363;
  font-size: ${(props) => props.theme.fontMenu};
  cursor: pointer;

`;

export const Press = styled(AboutUs)``;

export const Blog = styled(AboutUs)``;

export const IOS = styled(AboutUs)``;

export const Android = styled(AboutUs)``;

export const TopRight = styled.div`
  display: flex;
  position: absolute;
  width: 58%;
  align-items: center;
  justify-content: flex-end;
  right: 3%;
  
`;

export const Facebook = styled.img`
  margin-right: 15px;
  cursor: pointer;
`;

export const Twitter = styled(Facebook)``;

export const Google = styled(Facebook)``;

export const Instagram = styled(Facebook)``;

export const LineBetween = styled.img`
  z-index: 10;
  width: 100vw;
  bottom: 36px;
  position: absolute;
  border: 1px solid #ebebeb;
`;

export const FooterBottomBar = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  width: 100vw;
  /* left: 3%; */
  position: absolute;
  bottom: 0px;
  background: #ffffff;
`;

export const CopyRightImg = styled.img`
  color: #646363;
  height: 12px;
  background: #ffffff;
  margin-left: 3%;

`;
