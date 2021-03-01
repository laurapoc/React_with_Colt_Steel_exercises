import React, { Component } from "react";

export default class Box extends Component {
  render() {
    return (
      <div style={{display: "flex"}}>
        <button style={{height: "40px", width: "40px"}} onClick={this.props.removeItem}>X</button>
        <div
          style={{ height: this.props.height, width: this.props.width, backgroundColor: this.props.backgroundColor, marginLeft: "10px"}}
        ></div>
        
      </div>
    );
  }
}
