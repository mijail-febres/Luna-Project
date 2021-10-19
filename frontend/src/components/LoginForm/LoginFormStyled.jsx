import styled from "styled-components";

export const FormDivWrapper = styled.div`
  width: 500px;
  height: 500px;
`;

export const LoginFormWrapper = styled.form`
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`;

export const LoginTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  margin-bottom: 4%;
`;

export const LineBelowText = styled.div`
  border: 1px solid #e47d31;
  width: 18%;
`;

export const ButtonLogin = styled.button`
  width: 280px;
  height: 60px;
  border-radius: 28px;
  text-align: center;
  letter-spacing: 1px;
  background: #e47d31;
  color: #ffffff;
  line-height: 14px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputsCombinedWrapper = styled.div`
  height: 40%;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 52px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  border: 1px solid #ebebeb;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  width: 85%;
  border: none;
  color: #979797;
  font-weight: 700;

  :focus {
    outline: none;
  }
`;
