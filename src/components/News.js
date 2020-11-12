import React, { useState } from "react";
import { connect } from "react-redux";
import "./News.css";
import SearchPanel from "./SearchPanel";
import AddNews from "./AddNews";

const News = (props) => {
  const [opened, setOpened] = useState(false);
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

  const handleAddClick = (e) => {
    e.preventDefault();
    setOpened(true);
  };

  const addButton =
    props.currentUser && props.currentUser.role === "user" ? (
      <button className="ui centered button" onClick={handleAddClick}>
        <a href="/add">Add news</a>
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
      <AddNews show={opened} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
    news: state.news.articles,
  };
};

export default connect(mapStateToProps)(News);
