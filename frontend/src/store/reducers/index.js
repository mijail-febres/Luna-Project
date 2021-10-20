import userInfo from "./UserInfo";
import { combineReducers } from "redux";
import restaurants from "./Restaurants";

const reducer = combineReducers({
  user: userInfo,
  restaurants: restaurants,
});

export default reducer;
