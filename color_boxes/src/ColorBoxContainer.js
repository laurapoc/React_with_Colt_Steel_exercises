import React, { Component } from "react";
import "./ColorBoxContainer.css";
import ColorBox from "./ColorBox";

export default class ColorBoxContainer extends Component {
  static defaultProps = {
    numOfBox: 8,
  };

  render() {
    let boxList = [];
    for (let i = 0; i <= this.props.numOfBox; i++) {
      boxList.push(
        <li key={Math.random().toString(36).substr(2, 9)}>
          <ColorBox />
        </li>
      );
    }

    return (
      <div className="ColorBoxContainer">
        <ul>{boxList}</ul>
      </div>
    );
  }
}
