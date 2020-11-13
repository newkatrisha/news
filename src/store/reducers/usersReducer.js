const initState = {
  users: [
    {
      id: "Katya",
      password: "test123",
      role: "admin",
    },
    {
      id: "Andrey",
      password: "test456",
      role: "user",
    },
  ],
  currentUser: null,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isError: false,
        currentUser: state.users.find((user) => user.id === action.payload.id),
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        isError: true,
      };

    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
      };

    case "SET_ERROR_TO_FALSE":
      return {
        ...state,
        isError: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
