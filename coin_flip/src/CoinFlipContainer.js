import React, { Component } from "react";
import Coin from "./Coin";

export default class CoinFlipContainer extends Component {
  static defaultProps = {
    coinFaces: [
      { face: "https://tinyurl.com/react-coin-heads-jpg" },
      { face: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwP_f8pmKdEm5AVkmF7jPJ-NJf7WaDfi0Bsw&usqp=CAU" },
    ],
  };

  state = {
    coin: null,
    numOfHeads: 0,
    numOfTails: 0,
    numOfClicks: 0,
  };

  showCoinHandler = () => {
    let head = this.setState((st) => {
      return {
        coin: this.props.coinFaces[0].face,
        numOfHeads: st.numOfHeads + 1,
      };
    });
    return head;
  };

  switchCoinHandler = () => {
    let tail = this.setState((st) => {
      return {
        coin: this.props.coinFaces[1].face,
        numOfTails: st.numOfTails + 1,
      };
    });
    return tail;
  };

  buttonClickHandler = () => {
    let coin =
      this.state.coin === null || this.state.coin === this.props.coinFaces[1].face
        ? this.showCoinHandler()
        : this.switchCoinHandler();
    this.setState((st) => {
      return {
        numOfClicks: st.numOfClicks + 1,
      };
    });
    return coin;
  };

  render() {
    return (
      <div>
        <h1>Coin Flip!</h1>
        <div>
          <Coin coin={this.state.coin} />
        </div>
        <button onClick={this.buttonClickHandler}>Flip Me!</button>
        <h3>
          Out of {this.state.numOfClicks} flips there have been {this.state.numOfHeads} heads and {this.state.numOfTails} tails.
        </h3>
      </div>
    );
  }
}
