import UserAbout from "../../components/UserAbout/UserAbout";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, getUserInfo } from "../../store/actions";

const UserProfilePageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  /* display: flex; */
  background: #f2f2f2;
  /* flex-wrap: wrap; */
`;

const UserAboutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserProfile = (props) => {
  const [reviews, setReviews] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const tokenRedux = useSelector((state) => state.user.token);
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log("reviews", reviews);

  const getTokenSetUser = () => {
    const tokenInLocalStorage = localStorage.getItem("luna-auth-token");
    if (tokenInLocalStorage) {
      dispatch(setToken(tokenInLocalStorage));
      dispatch(() => getUserInfo(dispatch, tokenInLocalStorage));
    } else {
      history.push("/");
    }
  };

  const getReviews = async () => {
    const tokenInLocalStorage = localStorage.getItem("luna-auth-token");
    if (userInfo) {
      const url = `https://luna-dhmp.propulsion-learn.ch/backend/api/reviews/user/${userInfo.id}/`;
      const headers = new Headers({
        Authorization: `Bearer ${tokenInLocalStorage}`,
      });
      const config = {
        headers,
      };
      fetch(url, config)
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }
  };

  useEffect(() => {
    getTokenSetUser();
    getReviews();
  }, []);

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

export default UserProfile;
