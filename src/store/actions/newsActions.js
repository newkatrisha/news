import { v1 as uuidv1 } from "uuid";

export const add = (article) => {
  return (dispatch, getState) => {
    const userId = getState().users.currentUser.id;
    dispatch({
      type: "ADD_ARTICLE",
      payload: {
        ...article,
        id: uuidv1(),
        approved: false,
        userId,
      },
    });
  };
};

export const remove = (article) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_ARTICLE",
      payload: article.id,
    });
  };
};

export const approve = (article) => {
  return (dispatch, getState) => {
    const index = getState().news.articles.findIndex(
      (art) => art.id === article.id
    );
    dispatch({
      type: "APPROVE_ARTICLE",
      payload: index,
    });
  };
};

export const updateFilteredArticles = (result) => {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_FILTERED_ARTICLES",
      payload: result,
    });
  };
};

export const cleanFilteredArticles = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAN_FILTERED_ARTICLES",
    });
  };
};
