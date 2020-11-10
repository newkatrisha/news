import React from "react";
import { connect } from "react-redux";

const Home = (props) => {
  console.log(props.name);
  return props.auth ? (
    <div>
      <h1>Привет, {props.name}!</h1>
    </div>
  ) : (
    <div>
      <h1>Привет, Гость!</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.user.login,
    auth: state.isAuthenticated,
  };
};

export default connect(mapStateToProps)(Home);
