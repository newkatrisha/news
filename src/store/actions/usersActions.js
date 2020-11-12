export const login = (id, password) => {
  return (dispatch, getState) => {
    const users = getState().users.users;
    const user = users.find(
      (user) => user.id === id && user.password === password
    );
    if (user) {
      dispatch({
        type: "LOGIN",
        payload: user,
      });
    } else {
      dispatch({
        type: "LOGIN_ERROR",
      });
    }
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: "LOGOUT",
    });
  };
};
