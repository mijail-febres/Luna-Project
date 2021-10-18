import {
  FormDivWrapper,
  LoginFormWrapper,
  LoginTitle,
  InputsCombinedWrapper,
  InputWrapper,
  Input,
  LineBelowText,
  ButtonLogin,
} from "./LoginFormStyled";
import { getUserToken } from "../../store/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

const LoginForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.target.name === "username") {
      setUsername(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      dispatch(() => getUserToken(dispatch, username, password));
    }
  };

  return (
    <FormDivWrapper onSubmit={handleSubmit}>
      <LoginFormWrapper>
        <LoginTitle> Login </LoginTitle>
        <LineBelowText />
        <InputsCombinedWrapper>
          <InputWrapper>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              name="username"
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={handleChange}
            />
          </InputWrapper>
        </InputsCombinedWrapper>
        <ButtonLogin> Login </ButtonLogin>
      </LoginFormWrapper>
    </FormDivWrapper>
  );
};

export default LoginForm;
