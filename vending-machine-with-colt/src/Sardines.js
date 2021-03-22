import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

import "./Sardines.css";

export default class Sardines extends Component {
  render() {
    return (
      <div className="Sardines" style={{ backgroundImage: "url(https://i.gifer.com/9Ieq.gif)" }}>
        <Message>
          <h3>Sardines Component</h3>
          <Link to="/">Go Back</Link>
        </Message>
      </div>
    );
  }
}
