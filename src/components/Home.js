import React, { useState } from "react";
import { connect } from "react-redux";
import "./Home.css";
import News from "../components/News";

const Home = (props) => {
  return props.currentUser ? (
    <div>
      <h1>Привет, {props.currentUser.id}!</h1>
      <News />
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
