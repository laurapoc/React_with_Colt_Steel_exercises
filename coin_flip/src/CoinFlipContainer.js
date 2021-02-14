import React, { Component } from "react";
import Coin from "./Coin";

export default class CoinFlipContainer extends Component {
  state = {
    coin: "",
    // head: "https://tinyurl.com/react-coin-heads-jpg",
    // tail: "https://tinyurl.com/react-coin-tails-jpg",
  };

  showCoinHandler = () => {
    this.setState({ coin: "https://tinyurl.com/react-coin-heads-jpg" });
  };

  buttonClickHandler = () => {
   this.showCoinHandler()
   
 
  };

  render() {
    return (
      <div>
        <h1>Coin Flip!</h1>
        <div>
          <Coin coin={this.state.coin} />
        </div>
        <button onClick={this.buttonClickHandler}>Flip Me!</button>
      </div>
    );
  }
}
