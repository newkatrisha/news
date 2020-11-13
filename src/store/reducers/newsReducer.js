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
  filteredArticles: [],
};

const newsReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return {
        ...state,
        articles: [...state.articles, action.payload],
      };
    case "REMOVE_ARTICLE":
      return {
        ...state,
        articles: state.articles.filter((art) => art.id !== action.payload),
      };
    case "APPROVE_ARTICLE":
      state.articles[action.payload] = {
        ...state.articles[action.payload],
        approved: true,
      };
      return {
        ...state,
      };
    case "UPDATE_FILTERED_ARTICLES":
      let new_filtered_array = action.payload;
      if (!Array.isArray(new_filtered_array)) {
        new_filtered_array = [new_filtered_array];
      }

      return {
        ...state,
        filteredArticles: new_filtered_array,
      };
    case "CLEAN_FILTERED_ARTICLES":
      return {
        ...state,
        filteredArticles: [],
      };
    default:
      return state;
  }
};

export default newsReducer;
