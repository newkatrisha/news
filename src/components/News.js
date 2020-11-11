import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./News.css";

const News = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const newsList = props.news.length ? (
    <div className="ui cards">
      {props.news.map((post) => {
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
          </div>
        );
      })}
    </div>
  ) : (
    <div>There are no news</div>
  );

  const addButton =
    props.currentUser && props.currentUser === props.user ? (
      <button className="ui centered button" onClick={() => setIsOpened(true)}>
        <a href="/add">Add news</a>
      </button>
    ) : null;

  return (
    <div className="ui container center">
      {newsList}
      <div id="button" className="ui two column centered grid">
        {addButton}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentUser: state.users.currentUser,
    admin: state.users.admin,
    user: state.users.user,
    news: state.news.articles,
  };
};

export default connect(mapStateToProps)(News);
