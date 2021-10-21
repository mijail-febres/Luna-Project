import LoginForm from "../../components/LoginForm/LoginForm";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import { setToken, getUserInfo } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #f2f2f2;
  flex-wrap: wrap;
`;

const LoginFormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Login = (props) => {
  const dispatch = useDispatch();
  const getTokenSetUser = () => {
    const tokenInLocalStorage = localStorage.getItem("luna-auth-token");
    if (tokenInLocalStorage) {
      dispatch(setToken(tokenInLocalStorage));
      dispatch(() => getUserInfo(dispatch, tokenInLocalStorage));
    }
  };

  useEffect(getTokenSetUser, [dispatch]);
  const tokenInGlobalState = useSelector((state) => state.user.token);
  const userInfoInGlobalState = useSelector((state) => state.user.userInfo);
  if (tokenInGlobalState && userInfoInGlobalState) {
    props.history.push("/");
  }

  return (
    <LoginWrapper>
      <MainHeader />
      <LoginFormWrapper>
        <LoginForm />
      </LoginFormWrapper>
      <MainFooter />
    </LoginWrapper>
  );
};

export default Login;
