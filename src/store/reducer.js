const initState = {
  articles: [
    { id: 1, title: "Blah", text: "Lorem" },
    { id: 2, title: "Blah2", text: "Lorem2" },
    { id: 3, title: "Blah3", text: "Lorem3" },
  ],
  admin: {
    login: "Katya",
    password: "test123",
  },
  user: {
    login: "Andrey",
    password: "delphi",
  },
  isAuthenticated: false,
};

const reducer = (state = initState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "LOGIN":
      if (action.user.login === state.user.login && action.user.password)
        return {
          ...state,
          isAuthenticated: true,
        };
    case "ADD":
      return {
        ...state,
        articles: action.news,
      };

    default:
      return state;
  }
};

export default reducer;
