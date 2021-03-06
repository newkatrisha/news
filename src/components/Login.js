import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { login, setErrorToFalse } from "../store/actions/usersActions";
import { Redirect, useHistory } from "react-router-dom";
import { loginForm } from "./styles/elements";

const Login = (props) => {
  let history = useHistory();
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
        history.push("/");
      }}
    >
      {loginForm(handleChange, handleClick)}
      {props.error ? (
        <div className="ui negative floating message">
          <h4>Login Error</h4>
        </div>
      ) : null}
    </Modal>
  );
};

const mapStateToProps = (state) => {
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
