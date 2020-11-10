import React, { useEffect, useState } from "react";
import axios from "axios";
import "./News.css";
import { connect } from "react-redux";

const News = (props) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      const data = res.data.slice(0, 10);
      setNews(data);
    });
  }, []);
  console.log(props.articles);

  const newsList = news.length ? (
    news.map((post) => {
      return (
        <div>
          <div className="ui cards">
            <div className="card" key={post.id}>
              <div className="content">
                <div className="header">
                  <h1>{post.title}</h1>
                </div>
              </div>
              <div className="content">
                <p>{post.body}</p>
              </div>
              <div className="extra content">
                <div className="meta">
                  <span className="date">Posted in Nov {post.id} 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div>There are no news</div>
  );

  return (
    <div className="ui container">
      <button className="ui button">
        <a href="/add">Add news</a>
      </button>
      {newsList}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps)(News);
