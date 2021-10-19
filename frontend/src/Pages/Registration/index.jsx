import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import styled from "styled-components";

const SignUpPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #f2f2f2;
`;

const RegistrationFormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Registration = (props) => {
  return (
    <SignUpPageWrapper>
      <MainHeader />
      <RegistrationFormWrapper>
        <RegistrationForm />
      </RegistrationFormWrapper>
      <MainFooter />
    </SignUpPageWrapper>
  );
};

export default Registration;
