import loggedReducer from "./isLogged";
import userRegisterReducer from "./userRegister ";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  userRegister: userRegisterReducer,
});

export default allReducers;
