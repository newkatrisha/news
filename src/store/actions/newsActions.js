export const add = (article) => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_ARTICLE",
      article,
    });
  };
};
