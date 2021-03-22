import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Soda.css";
import sodaImg from "./Soda.png";

export default class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <img src={sodaImg} alt="coca cola can" />
        <Message>
          <h4>Soda Component</h4>
          <Link to="/">Go Back</Link>
        </Message>

        <img src={sodaImg} alt="coca cola can" />
      </div>
    );
  }
}
