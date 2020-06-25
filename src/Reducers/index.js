import { combineReducers } from "redux";
import loginReducer from "../Reducers/LoginReducer";
import profileReducer from "../Reducers/ProfileReducer";

const masterReducer = combineReducers({
  Login: loginReducer,
  Profile: profileReducer,
});

export default masterReducer;
