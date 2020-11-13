import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { login, setErrorToFalse } from "../store/actions/usersActions";
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
    e.preventDefault();
    props.login(currentUser);
  };

  if (props.currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Modal
      isOpen={open}
      ariaHideApp={false}
      onRequestClose={() => {
        props.setErrorToFalse();
        setOpen(false);
      }}
    >
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

        {props.error ? (
          <div className="ui negative floating message">
            <h4>Login Error</h4>
          </div>
        ) : null}

        <button className="ui button" type="button" onClick={handleClick}>
          Login
        </button>
      </form>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentUser: state.users.currentUser,
    error: state.users.isError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user.id, user.password));
    },
    setErrorToFalse: () => {
      dispatch(setErrorToFalse());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
