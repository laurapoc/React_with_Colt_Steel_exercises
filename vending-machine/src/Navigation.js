import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="Navigation">
          <NavLink exact activeClassName="active-link" to="/">
            HOME
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/soda">
            SODA
          </NavLink>
          <NavLink exact activeClassName="active-link" to="/chips">
            CHIPS
          </NavLink>
        </nav>
      </div>
    );
  }
}
