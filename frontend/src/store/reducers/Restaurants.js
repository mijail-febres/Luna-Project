import { setRestaurants } from "../actions";
import { setRestaurantRating } from "../actions";

const initialState = {
  restaurantsList: null,
  restaurantRating: 0,
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case 'setRestaurants':
      const new_restaurantsList = {...state};
      new_restaurantsList.restaurantsList = action.payload;
      return new_restaurantsList;
    case 'setRestaurantRating':
      const new_restaurantRating = {...state};
      new_restaurantRating.restaurantRating = action.payload;
      return new_restaurantRating;
    default:
      return state;
  }
};

export default restaurants;
