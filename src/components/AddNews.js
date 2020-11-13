import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../store/actions/newsActions";
import { addNews } from "./styles/elements";
import { useHistory } from "react-router-dom";

const AddNews = (props) => {
  let history = useHistory();
  const [article, setArticle] = useState({
    title: "",
    content: "",
    time: new Date().toString().slice(0, 24),
  });

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    props.add(article);
    history.push("/news");
  };

  return <div>{addNews(handleChange, handleSubmit)}</div>;
};

const mapStateToProps = (state) => {
  return {
    news: state.news.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (article) => {
      dispatch(add(article));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNews);
