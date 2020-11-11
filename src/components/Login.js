import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/usersActions";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";

const Login = (props) => {
  const [currentUser, setCurrentUser] = useState({
    login: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const handleChange = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
    setShow(false);
    props.login(currentUser);
  };

  if (props.currentUser) return <Redirect to="/" />;
  return (
    <Modal isOpen={show} onRequestClose={() => setShow(false)}>
      <div>
        <form className="ui form">
          <div className="field">
            <label>Login</label>
            <input
              type="email"
              name="login"
              placeholder="login"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
            />
          </div>

          <button className="ui button" onClick={handleClick}>
            Login
          </button>
        </form>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
