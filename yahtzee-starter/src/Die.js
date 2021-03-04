import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  // instead of arrow function in props
  // (it's a better solution):
  handleClick = () => {
    this.props.handleClick(this.props.idx);
  };

  render() {
    console.log(this.props.val);
    let iconClass = `fas fa-dice-${this.props.val}`;
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
        // onClick={() => this.props.handleClick(this.props.idx)}
      >
        {/* <i className={iconClass}></i> */}
        {this.props.val}
      </button>
    );
  }
}

export default Die;
