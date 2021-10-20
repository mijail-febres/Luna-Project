import styled from "styled-components";

export const FormDivWrapper = styled.div`
  width: 900px;
  height: 500px;
`;

export const SignInFormWrapper = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
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


export const SignInTitle = styled.p`
  font-size: 40px;
`;

export const InputsCombinedWrapper = styled.div`
  height: 35%;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 52px;
  margin: 10px;
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

export const InputWrapperTwoPerLine = styled.div`
  width: 100%;
  padding-bottom: 8px;
  margin-top: 20px;
  border-bottom: 1px solid #00000030;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 85%;
  border: none;
  color: #979797;
  font-weight: 700;
  margin: 10px; 

  :focus {
    outline: none;
  }
`;

export const InputSmall = styled.input`
  width: 40%;
  border: none;
  color: #979797;
  font-weight: 700;
  margin: 10px; 


  :focus {
    outline: none;
  }
`;
