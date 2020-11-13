import React from "react";
import { connect } from "react-redux";
import "./Home.css";

const Home = (props) => {
  return props.currentUser ? (
    <div>
      <h1>Привет, {props.currentUser.id}!</h1>
    </div>
  ) : (
    <div>
      <h1>Привет, Гость!</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentUser: state.users.currentUser,
  };
};

export default connect(mapStateToProps)(Home);
