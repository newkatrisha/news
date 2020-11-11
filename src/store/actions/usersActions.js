export const login = (user) => {
  return (dispatch, getState) => {
    if (user.login === "Andrey" && user.password === "test456") {
      dispatch({
        type: "USER_LOGIN",
        user,
      });
    } else if (user.login === "Katya" && user.password === "test123") {
      dispatch({
        type: "ADMIN_LOGIN",
        user,
      });
    } else {
      dispatch({
        type: "LOGIN_ERROR",
        user,
      });
    }
  };
};
