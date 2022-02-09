export const isLogged = () => {
  return {
    type: "SIGN_IN",
  };
};

export const userRegister = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const resetUserRecord = () => ({
  type: "RESET_USER",
});

export const resetMegye = () => ({
  type: "RESET_MEGYE",
});
