const initState = {
  articles: [
    {
      id: 1,
      title: "First Article",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur iure corporis officiis minus inventore quam qui cupiditate! Odit ipsa repellendus quaerat incidunt quisquam placeat eum, enim officiis sunt minus.",
      time: new Date().toString().slice(0, 24),
      userId: 1,
      approved: true,
    },
    {
      id: 2,
      title: "Second Article",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur iure corporis officiis minus inventore quam qui cupiditate! Odit ipsa repellendus quaerat incidunt quisquam placeat eum, enim officiis sunt minus.",
      time: new Date().toString().slice(0, 24),
      userId: 1,
      approved: true,
    },
    {
      id: 3,
      title: "Third Article",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur iure corporis officiis minus inventore quam qui cupiditate! Odit ipsa repellendus quaerat incidunt quisquam placeat eum, enim officiis sunt minus.",
      time: new Date().toString().slice(0, 24),
      userId: 1,
      approved: true,
    },
  ],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        articles: [...state.articles, action.article],
      };
    default:
      return state;
  }
};

export default usersReducer;
