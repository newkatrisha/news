import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";

const AddNews = (props) => {
  const [article, setArticle] = useState({
    title: "",
    content: "",
    time: new Date().toString().slice(0, 24),
  });

  const [news, setNews] = useState(props.news);
  console.log(news, props.news);

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNews(article);
    props.add(article);
  };

  if (news.length != props.news.length) return <Redirect to="/news" />;
  return (
    <div>
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Text</label>
          <textarea
            name="content"
            placeholder="Add your text here"
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="field">
          <div className="ui checkbox">
            <input type="checkbox" tabindex="0" class="hidden" />
            <label>I agree to the Terms and Conditions</label>
          </div>
        </div>

        <button className="ui button" type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news.articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (article) => {
      dispatch({ type: "ADD", article });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNews);
