import userInfo from "./UserInfo";
import { combineReducers } from "redux";
import restaurants from "./Restaurants";
import userList from "./Users";

const reducer = combineReducers({
  user: userInfo,
  userList: userList,
  restaurants: restaurants,
});

export default reducer;
