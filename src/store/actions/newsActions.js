export const add = (article) => {
  return (dispatch, getState) => {
    const userId = getState().users.currentUser.id;
    dispatch({
      type: "ADD_ARTICLE",
      payload: {
        ...article,
        id: uuid(),
        approved: false,
        userId,
      },
    });
  };
};
