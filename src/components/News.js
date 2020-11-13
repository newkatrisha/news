import React from "react";
import { connect } from "react-redux";
import "./styles/News.css";
import SearchPanel from "./SearchPanel";
import { Link } from "react-router-dom";
import { remove, approve } from "../store/actions/newsActions";
import { getNewsList } from "../utils/utils";

const News = (props) => {
  let news = null;

  props.filteredArticles.length > 0
    ? (news = props.filteredArticles)
    : (news = getNewsList(props.currentUser, props.news));

  const newsList = news ? (
    <div className="ui cards">
      {news.map((post) => {
        return (
          <div className="ui centered card" key={post.id}>
            <div className="content">
              <div className="header">
                <h1>{post.title}</h1>
              </div>
            </div>
            <div className="content">
              <p>{post.content}</p>
            </div>
            <div className="extra content">
              <div className="meta">
                <span className="date">{post.time}</span>
              </div>
            </div>
            {props.currentUser && props.currentUser.role === "admin" ? (
              <div className="ui buttons">
                <button
                  className="ui button"
                  onClick={() => props.remove(post)}
                >
                  Cancel
                </button>
                <div className="or"></div>
                <button
                  className="ui positive button"
                  onClick={() => {
                    console.log(post);
                    props.approve(post);
                  }}
                >
                  Save
                </button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  ) : (
    <div>There are no news</div>
  );

  const addButton =
    props.currentUser && props.currentUser.role === "user" ? (
      <button className="ui centered button">
        <Link to="/add">Add news</Link>
      </button>
    ) : null;

  return (
    <div className="ui container center">
      <div className="ui center  aligned header">
        <SearchPanel />
      </div>
      {newsList}
      <div id="button" className="ui two column centered grid">
        {addButton}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
    news: state.news.articles,
    filteredArticles: state.news.filteredArticles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => {
      dispatch(remove(id));
    },
    approve: (article) => {
      dispatch(approve(article));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
