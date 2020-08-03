import React from "react";
import "../App.css";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        to={{
          pathname: `/`
        }}
        className="initial_button"
        activeClassName="active"
      >
        <img className="logo" src={logo} alt="Logo" />
      </NavLink>
      NUS-WING COVID-19
    </div>
  );
};

export default Header;
