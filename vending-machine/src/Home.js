import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css"

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Content-box">
          <h3>HELLO! I'M VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h3>
        </div>
        <div className="Content-box">
          <NavLink exact activeClassName="active-home-links" to="/soda">SODA</NavLink>
          <NavLink exact activeClassName="active-home-links" to="/chips">CHIPS</NavLink>
        </div>
      </div>
    );
  }
}
