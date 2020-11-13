import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const links = props.currentUser ? (
    <li onClick={props.logOut}>Выход</li>
  ) : (
    <li>
      <Link to="/login">Вход</Link>
    </li>
  );
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/news" onClick={props.cleanFilteredArticles}>
            Новости
          </Link>
        </li>
        {links}
      </ul>
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
    cleanFilteredArticles: () => {
      dispatch({ type: "CLEAN_FILTERED_ARTICLES" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
