import styled from "styled-components";
import { SmallerButton } from "../DefaultButton/DefaultButtonStyled";

export const Form = styled.form`
  width: 95%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 10px;
`;

export const FormTitle = styled.div`
  display: flex;
  color: #303030;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #979797;
`;

export const DefaultInputField = styled.input`
  width: 50%;
  height: 25px;
  padding: 1px;
  margin-top: 4px;
  border: 1px solid #ebebeb;
`;

export const ThingsILoveInputField = styled.input`
  width: 100%;
  height: 25px;
  padding: 1px;
  margin-top: 4px;
  border: 1px solid #ebebeb;
`;

export const DescriptionInputField = styled.textarea`
  width: 100%;
  height: 75px;
  resize: none;
  margin-top: 4px;
  border: 1px solid #ebebeb;
`;

export const BottomRowWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteAccountLink = styled.div`
  color: red;

  &:hover {
    cursor: pointer;
  }
`;

export const SaveButton = styled(SmallerButton)`
  width: 30%;
`;

export const ChangeAvatarButton = styled.div`
  width: 200px;
  height: 39px;
  font-size: 16px;
  border-radius: 28px;
  text-align: center;
  letter-spacing: 1px;
  background: #e47d31;
  color: #ffffff;
  line-height: 14px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageUpload = styled.input`
  height: 60px;
  display: none;
`;
