import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styled from "styled-components";

const SignUpPageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #F2F2F2;
`;



const Registration = (props) => {
  return (
    <SignUpPageWrapper>
        <RegistrationForm />
    </SignUpPageWrapper>
  );
};

export default Registration;
