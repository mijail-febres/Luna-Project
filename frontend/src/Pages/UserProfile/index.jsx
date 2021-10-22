import UserAbout from "../../components/UserAbout/UserAbout";
import MainHeader from "../../components/MainHeader/MainHeader";
import MainFooter from "../../components/MainFooter/MainFooter";
import UserNavigationColumn from "../../components/UserNavigationColumn/UserNavigationColumn";
import ReviewByUser from "../../components/ReviewByUser/ReviewByUser";
import CommentByUser from "../../components/CommentByUser/CommentByUser";
import RestaurantByUser from "../../components/RestaurantByUser/RestaurantByUser";
import UserEditProfile from "../../components/UserEditProfile/UserEditProfile";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUserInfo } from "../../store/actions";
import backgroundImage from "../../assets/zurich.jpeg";
import defaultNoImage from "../../assets/default-no-image.png";
import { StandardButton } from "../../components/DefaultButton/DefaultButtonStyled";

const UserProfilePageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  /* display: flex; */
  background: #f2f2f2;
  /* flex-wrap: wrap; */
`;

const UserAboutWrapper = styled.div`
  width: 20%;
  height: 30%;
  position: absolute;
  top: 370px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubBanner = styled.div`
  width: 100vw;
  height: 150px;
  position: absolute;
  top: 71px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${backgroundImage});
  filter: brightness(40%);
`;

const UserPictureNavBarWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
`;

const UserProfilePicture = styled.img`
  width: 234px;
  height: 234px;
`;

const UserBasicInfo = styled.div`
  height: 110px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  left: 400px;
  top: 90px;
`;

const MainName = styled.p`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

const MainInfo = styled.p`
  color: white;
`;

const MiddleContentWrapper = styled.div`
  width: 50%;
  min-width: 25%;
  height: 54%;
  display: flex;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-color: transparent transparent;
  flex-direction: column;
  position: absolute;
  left: 400px;
  top: 241px;
  background-color: white;
  padding: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MiddleTitle = styled.p`
  font-size: 24px;
  margin-bottom: 15px;
`;

const CreateRestaurantButton = styled(StandardButton)`
  align-self: center;
  margin-top: 30px;
`;

const UserProfile = (props) => {
  const [reviews, setReviews] = useState("");
  const [comments, setComments] = useState("");
  const [restaurants, setRestaurants] = useState("");
  const [refetch, setRefetch] = useState(false);
  const [stage, setStage] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log("userInfo", userInfo);
  console.log("reviews", reviews);
  console.log("comments", comments);
  console.log("restaurants", restaurants);

  const getTokenSetUser = () => {
    const tokenInLocalStorage = localStorage.getItem("luna-auth-token");
    if (tokenInLocalStorage) {
      dispatch(setToken(tokenInLocalStorage));
      // dispatch(() => getUserInfo(dispatch, tokenInLocalStorage));
      const url = "https://luna-dhmp.propulsion-learn.ch/backend/api/me/";
      const headers = new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenInLocalStorage}`,
      });
      const config = {
        headers,
      };

      fetch(url, config)
        .then((res) => res.json())
        .then((data) => {
          dispatch(setUserInfo(data));
          setRefetch(true);
        });
    } else {
      history.push("/");
    }
  };

  const getReviews = () => {
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

  const getComments = () => {
    const tokenInLocalStorage = localStorage.getItem("luna-auth-token");
    if (userInfo) {
      const url = `https://luna-dhmp.propulsion-learn.ch/backend/api/review/comment/${userInfo.id}/`;
      const headers = new Headers({
        Authorization: `Bearer ${tokenInLocalStorage}`,
      });
      const config = {
        headers,
      };
      fetch(url, config)
        .then((res) => res.json())
        .then((data) => setComments(data));
    }
  };

  const getRestaurants = () => {
    const tokenInLocalStorage = localStorage.getItem("luna-auth-token");
    if (userInfo) {
      const url = `https://luna-dhmp.propulsion-learn.ch/backend/api/restaurants/user/${userInfo.id}/`;
      const headers = new Headers({
        Authorization: `Bearer ${tokenInLocalStorage}`,
      });
      const config = {
        headers,
      };
      fetch(url, config)
        .then((res) => res.json())
        .then((data) => setRestaurants(data));
    }
  };

  const createRestaurantRedirect = () => {
    history.push("/newrestaurant");
  };

  useEffect(() => {
    getTokenSetUser();
    getReviews();
    getComments();
    getRestaurants();
  }, [refetch]);

  return (
    <UserProfilePageWrapper>
      <MainHeader />
      <SubBanner />
      <UserPictureNavBarWrapper>
        <UserProfilePicture
          src={userInfo ? userInfo.profile_picture : defaultNoImage}
        />
        {userInfo ? <h2>{`${userInfo.first_name}'s profile`}</h2> : null}
        <UserNavigationColumn setStage={setStage} stage={stage} />
      </UserPictureNavBarWrapper>
      <UserBasicInfo>
        <MainName>
          {userInfo ? `${userInfo.first_name} ${userInfo.last_name}` : null}
        </MainName>
        <MainInfo>{userInfo ? userInfo.location : null}</MainInfo>
        <MainInfo>
          {userInfo ? `${userInfo.total_reviews} reviews` : null}
        </MainInfo>
      </UserBasicInfo>
      <MiddleContentWrapper>
        {stage === 0 ? (
          <>
            <MiddleTitle>REVIEWS</MiddleTitle>
            {reviews
              ? reviews.map((review) => (
                  <ReviewByUser
                    key={review.id}
                    restaurant_name={review.reviewed_restaurant.name}
                    creation_date={review.created}
                    review={review.text_content}
                    rating={review.rating}
                  />
                ))
              : null}
          </>
        ) : null}
        {stage === 1 ? (
          <>
            <MiddleTitle>COMMENTS</MiddleTitle>
            {comments
              ? comments.map((comment) => (
                  <CommentByUser
                    key={comment.id}
                    commentedReview={comment.commented_review}
                    creationDate={comment.created}
                    textContent={comment.text_content}
                  />
                ))
              : null}
          </>
        ) : null}
        {stage === 2 ? (
          <>
            <MiddleTitle>RESTAURANTS</MiddleTitle>
            {restaurants
              ? restaurants.map((restaurant) => (
                  <RestaurantByUser
                    restaurantName={restaurant.name}
                    rating={restaurant.rating_sum}
                    city={restaurant.city}
                    country={restaurant.country}
                    street={restaurant.street}
                    openingHours={restaurant.opening_hours}
                  />
                ))
              : null}
            <CreateRestaurantButton onClick={() => createRestaurantRedirect()}>
              Create Restaurant
            </CreateRestaurantButton>
          </>
        ) : null}
        {stage === 3 ? (
          <UserEditProfile
            username={userInfo ? userInfo.username : ""}
            firstName={userInfo.first_name}
            lastName={userInfo.last_name}
            email={userInfo.email}
            location={userInfo.location}
            phone={userInfo.phone}
            thingsILove={userInfo.things_user_likes}
            description={userInfo.description}
          />
        ) : null}
      </MiddleContentWrapper>
      <UserAboutWrapper>
        <UserAbout
          firstName={userInfo ? userInfo.first_name : ""}
          location={userInfo ? userInfo.location : ""}
          dateJoined={userInfo ? userInfo.date_joined : ""}
          description={userInfo ? userInfo.description : ""}
          thingsUserLikes={userInfo ? userInfo.things_user_likes : ""}
        />
      </UserAboutWrapper>
      <MainFooter />
    </UserProfilePageWrapper>
  );
};

export default UserProfile;
