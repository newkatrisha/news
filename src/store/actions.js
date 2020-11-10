export const login = (user) => {
  return (dispatch, getState) => {
    console.log(getState);
    if (user.login) {
      console.log("here in actions");
    }
    dispatch({
      type: "LOGIN",
      user,
    });
  };
};

export const add = (news) => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD",
      news,
    });
  };
};
