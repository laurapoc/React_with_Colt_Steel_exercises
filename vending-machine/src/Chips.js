import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Chips.css";

export default class Chips extends Component {
  static defaultProps = {
    imageSource: "https://images-na.ssl-images-amazon.com/images/I/81vJyb43URL._SL1500_.jpg",
    maxNum: 6,
  };

  state = {
    images: [],
  };

  handleButtonClick = () => {
    if (this.state.images.length < this.props.maxNum) {
      this.setState((prevState) => ({
        images: [...prevState.images, this.props.imageSource],
      }));
    } else {
      alert("You can not add more chips");
    }

    console.log(this.state.images);
  };

  render() {
    let imageList = this.state.images.map((img) => <img src={img} alt="Chips Lays" />);
    return (
      <div className="Chips">
        <h1>CHIPS COMPONENT</h1>
        <button onClick={this.handleButtonClick}>Get New Chips Pack!</button>
        <div className="chips-images">{imageList}</div>
        <div>
          <NavLink to="/">GO TO HOMEPAGE</NavLink>
        </div>
      </div>
    );
  }
}
