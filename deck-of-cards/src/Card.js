import React, { Component } from "react";
import "./Card.css";

export default class Card extends Component {
  constructor(props) {
    super(props);

    let rotateDeg = Math.random() * 90 - 45;
    let transXPos = Math.random() * 40 - 20;
    let transyPos = Math.random() * 40 - 20;
    this._transform = `translate(${transXPos}px, ${transyPos}px) rotate(${rotateDeg}deg)`;
  }

  render() {
    return (
      <img
        className="Card"
        src={this.props.imageSource}
        alt={this.props.alt}
        style={{ transform: this._transform }}
      />
    );
  }
}
