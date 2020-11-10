import React, { useState } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { login } from "./store/actions";

const Login = (props) => {
  console.log(props);
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  console.log(user);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    props.login(user);
  };
  return (
    <div className="popup">
      <form>
        <input
          type="email"
          name="login"
          placeholder="login"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.isAuthenticated,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch({ type: "LOGIN", user });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
