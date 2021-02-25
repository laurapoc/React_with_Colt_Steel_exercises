import React, { Component } from "react";

export default class NewBoxform extends Component {
  state = {
    width: "",
    height: "",
    backgroundColor: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addItem(this.state);
    this.setState({ width: "", height: "", backgroundColor: "" });
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div>
        <h2>Form goes here</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="width">Width</label>
          <input
            id="width"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <label htmlFor="height">Height</label>
          <input
            id="height"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            id="backgroundColor"
            name="backgroundColor"
            value={this.state.backgroundColor}
            onChange={this.handleChange}
          />
          <button>Add Box</button>
        </form>
      </div>
    );
  }
}
