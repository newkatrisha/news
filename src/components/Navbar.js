import React, { useState } from "react";
import Login from "./Login";
import { connect } from "react-redux";

const Navbar = (props) => {
  console.log(props.currentUser);
  const [show, setShow] = useState(false);

  const links = props.currentUser ? (
    <li onClick={() => props.logOut()}>
      <a>Выход</a>
    </li>
  ) : (
    <li
      onClick={(e) => {
        e.preventDefault();
        setShow(true);
      }}
    >
      <a href="">Вход</a>
    </li>
  );
  return (
    <div>
      <ul>
        <li>
          <a href="/">Главная</a>
        </li>
        <li>
          <a href="/news">Новости</a>
        </li>
        {links}
      </ul>
      <Login show={show} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch({
        type: "LOGOUT",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

{
  /* <li
          onClick={(e) => {
            e.preventDefault();
            if (props.currentUser) {
              props.logOut();
            }
            setShow(true);
          }}
        >
          <a href="">Вход/Выход</a>
        </li> */
}
