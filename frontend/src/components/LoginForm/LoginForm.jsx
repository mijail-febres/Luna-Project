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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      dispatch(() => getUserToken(dispatch, email, password));
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
              placeholder="Email"
              value={email}
              name="email"
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
