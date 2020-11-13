import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { login } from "../store/actions/usersActions";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [currentUser, setCurrentUser] = useState({
    id: "",
    password: "",
  });

  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleChange = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    setOpen(false);
    props.login(currentUser);
  };

  return props.currentUser ? (
    <Redirect to="/" />
  ) : (
    <Modal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={() => setOpen(false)}
    >
      <div>
        <form className="ui form">
          <div className="field">
            <label>Login</label>
            <input
              type="text"
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
  return {
    currentUser: state.users.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user.id, user.password));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
