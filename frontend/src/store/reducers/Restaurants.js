import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

const initialState = {
  restaurantsList: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setRestaurants':
      const new_restaurantsList = {...state}
      new_restaurantsList.restaurantsList = action.payload;
      return new_restaurantsList;
    default:
      return state;
  }
};

// Create Middleware
const middlewares = applyMiddleware(thunk);

// Create reducer
const restaurants = createStore(reducer, middlewares);

export default restaurants;
