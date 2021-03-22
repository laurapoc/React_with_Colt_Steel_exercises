import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="Navbar">
        <NavLink exact activeClassName="Navbar-active" to="/">
          HOME
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/chips">
          CHIPS
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/soda">
          SODA
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/sardines">
          SARDINES
        </NavLink>
      </div>
    );
  }
}
