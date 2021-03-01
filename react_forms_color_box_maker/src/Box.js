import React, { Component } from "react";

export default class Box extends Component {
  render() {
    return (
      <div style={{display: "flex"}}>
        <div
          style={{ height: this.props.height, width: this.props.width, backgroundColor: this.props.backgroundColor, marginRight: "10px"}}
        ></div>
        <button style={{height: "40px", width: "40px"}} onClick={this.props.removeItem}>X</button>
      </div>
    );
  }
}
