import { setRestaurants } from "../actions";
import { setRestaurantRating } from "../actions";

const initialState = {
  restaurantsList: null,
  reviewsList: null,
  restaurantRating: 0,
  search: '',
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case 'setRestaurants':
      const new_restaurantsList = {...state};
      new_restaurantsList.restaurantsList = action.payload;
      return new_restaurantsList;
    case 'setReviews':
      const new_reviewsList = {...state};
      new_reviewsList.reviewsList = action.payload;
      return new_reviewsList;
    case 'setRestaurantRating':
      const new_restaurantRating = {...state};
      new_restaurantRating.restaurantRating = action.payload;
      return new_restaurantRating;
    case 'setSearch':
      const new_search = {...state};
      new_search.search = action.payload;
      return new_search;
    default:
      return state;
  }
};

export default restaurants;
