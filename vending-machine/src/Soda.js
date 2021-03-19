import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Soda extends Component {
  render() {
    return (
      <div>
        <h2>Soda component</h2>
        <img
          src="https://www.wellandgood.com/wp-content/uploads/2018/05/Sparkling-Water-Slides-Feature-nobubbles-1.jpg"
          alt="soda water"
        />
        <div>
            <NavLink to="/">GO TO HOMEPAGE</NavLink>
        </div>
      </div>
    );
  }
}
