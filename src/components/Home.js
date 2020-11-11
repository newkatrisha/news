import React from "react";
import { connect } from "react-redux";
import "./Home.css";
import News from "../components/News";

const Home = (props) => {
  console.log(props.currentUser);
  return props.currentUser ? (
    <div>
      <h1>Привет, {props.currentUser.login}!</h1>
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
    auth: state.users.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Home);
