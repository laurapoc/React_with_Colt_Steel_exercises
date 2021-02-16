import React, { Component } from "react";
import "./ColorBox.css";

export default class ColorBox extends Component {
  state = {
    selectedColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
    // id: Math.random().toString(36).substr(2, 9),
  };

  getRandomColor = () => {
    let item = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.setState({
      selectedColor: item,
    });
  };

  render() {
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: this.state.selectedColor }}
        onClick={this.getRandomColor}
      ></div>
    );
  }
}
