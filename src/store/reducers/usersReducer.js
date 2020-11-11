const initState = {
  admin: {
    login: "Katya",
    password: "test123",
  },
  user: {
    login: "Andrey",
    password: "test456",
  },
  currentUser: null,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state,
        currentUser: state.user,
      };
    case "ADMIN_LOGIN":
      return {
        ...state,
        currentUser: state.admin,
      };
    case "LOGIN_ERROR":
      console.log("login error");

    default:
      return state;
  }
};

export default usersReducer;
