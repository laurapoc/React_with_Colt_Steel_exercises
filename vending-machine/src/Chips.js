import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Chips extends Component {
  render() {
    return (
      <div>
        <h2>Chips component</h2>
        <img src="https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SL1500_.jpg" alt="Chips Lays" />
        <div>
          <NavLink to="/">GO TO HOMEPAGE</NavLink>
        </div>
      </div>
    );
  }
}
