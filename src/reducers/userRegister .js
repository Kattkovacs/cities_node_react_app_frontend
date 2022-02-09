const INITIAL_STATE = {
  id: "",
  name: "",
  email: "",
  password: "",
  lastLogin: "",
};

const userRegister = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    case "RESET_USER":
      return INITIAL_STATE;
    default:
      return state;
  }
};
export default userRegister;
