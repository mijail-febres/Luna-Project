import { setUsers } from "../actions";
import { setUserRating } from "../actions";

const initialState = {
  usersList: null,
};

const userList = (state = initialState, action) => {
  switch (action.type) {
    case 'setUsers':
      const new_usersList = {...state};
      new_usersList.usersList = action.payload;
      return new_usersList;
    default:
      return state;
  }
};

export default userList;
