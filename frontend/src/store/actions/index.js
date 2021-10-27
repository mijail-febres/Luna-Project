export const setTokenAndUser = (token, userInfo) => {
  return {
    type: "setTokenAndUser",
    payload: [token, userInfo],
  };
};

export const setToken = (token) => {
  return {
    type: "setToken",
    payload: token,
  };
};

export const setUserInfo = (user) => {
  return {
    type: "setUserInfo",
    payload: user,
  };
};

export const setUserClicked = (user) => {
  console.log("setting user", user);
  return {
    type: "setUserClicked",
    payload: user,
  };
};

export const getUserToken = (dispatch, email, password) => {
  const url = "https://luna-dhmp.propulsion-learn.ch/backend/api/auth/token/";
  const headers = new Headers({
    "Content-Type": "application/json",
  });
  const body = {
    email: email,
    password: password,
  };
  const method = "POST";
  const config = {
    method,
    headers,
    body: JSON.stringify(body),
  };
  fetch(url, config)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("luna-auth-token", data.access);
      dispatch(setTokenAndUser(data.access, data.user));
    });
};

export const getUserInfo = (dispatch, token) => {
  const url = "https://luna-dhmp.propulsion-learn.ch/backend/api/me/";
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  const config = {
    headers,
  };

  fetch(url, config)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setUserInfo(data));
    });
};

export const setRestaurants = (restaurants) => (dispatch, getState) => {
  const action = {
    type: "setRestaurants",
    payload: restaurants,
  };
  dispatch(action);
};

export const setUsers = (users) => (dispatch, getState) => {
    const action = {
        type: "setUsers",
        payload: users,
    };
    dispatch(action)
};

export const setReviews = (reviews) => (dispatch, getState) => {
    const action = {
        type: "setReviews",
        payload: reviews,
    };
    dispatch(action)
};
export const setSearch = (search) => (dispatch, getState) => {
    const action = {
        type: "setSearch",
        payload: search,
    };
    dispatch(action)
};

export const setRestaurantRating = (rating) => (dispatch, getState) => {
    const action = {
        type: "setRestaurantRating",
        payload: rating,
    };
    dispatch(action)
};

// export const setBestRated = (restaurants) => (dispatch, getState) => {
//   const action ={
//     type : "setBestRated",
//     payload: restaurants,
//   };
//   dispatch(action)
// };

export const logOut = () => {
  return {
    type: "logOut",
  };
};
