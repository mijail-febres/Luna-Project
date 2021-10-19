import UserAbout from "../../components/UserAbout/UserAbout";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import styled from "styled-components";

const UserProfilePageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #f2f2f2;
  flex-wrap: wrap;
`;

const UserAboutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Registration = (props) => {
  return (
    <UserProfilePageWrapper>
      <MainHeader />
      <UserAboutWrapper>
        <UserAbout />
      </UserAboutWrapper>
      <MainFooter />
    </UserProfilePageWrapper>
  );
};

export default Registration;
