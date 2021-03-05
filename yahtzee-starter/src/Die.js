import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
    // first option to display dices to rotate right after rendering:
    // val: 5
  };

  // instead of arrow function in props
  // (it's a better solution):
  handleClick = () => {
    this.props.handleClick(this.props.idx);
  };

  render() {
    const { numberWords, locked, val, disabled, rolling } = this.props;
    let classes = `Die fas fa-dice-${numberWords[val - 1]} fa-5x `;
    if (locked) classes += "Die-locked";
    if (rolling) classes += "Die-rolling";
    return (
      <i
        className={classes}
        // style={{ backgroundColor: this.props.locked ? "grey" : "black" }}

        onClick={this.handleClick}
        disabled={disabled}
        // onClick={() => this.props.handleClick(this.props.idx)}
      ></i>
    );
  }
}

export default Die;
