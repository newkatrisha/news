export const getNewsList = (user, news) => {
  let newsList = null;
  if (user === null) {
    newsList = news.filter((art) => art.approved);
  } else if (user.role === "admin") {
    newsList = news;
  } else {
    newsList = news.filter((art) => art.approved || art.userId === user.id);
  }
  return newsList;
};
