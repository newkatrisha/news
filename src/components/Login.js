import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { login } from "../store/actions/usersActions";

const Login = (props) => {
  const [currentUser, setCurrentUser] = useState({
    id: "",
    password: "",
  });

  const [close, setClose] = useState(false);

  const handleChange = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    setClose(true);
    props.login(currentUser);
  };

  return (
    <Modal isOpen={props.show && !close} ariaHideApp={false}>
      <div>
        <form className="ui form">
          <div className="field">
            <label>Login</label>
            <input
              type="email"
              name="id"
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
  console.log(state);
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user.id, user.password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
