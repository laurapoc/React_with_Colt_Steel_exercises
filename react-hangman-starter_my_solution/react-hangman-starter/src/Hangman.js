import React, { Component, Fragment } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import { randomWord } from "./words";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, nRight: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer.split("").map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    let regex = new RegExp(ltr, "g");
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
      nRight: st.nRight + (st.answer.includes(ltr) ? st.answer.match(regex).length : 0),
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button key={ltr} value={ltr} onClick={this.handleGuess} disabled={this.state.guessed.has(ltr)}>
        {ltr}
      </button>
    ));
  }

  handleRestart = () => {
    this.setState({nWrong: 0, nRight: 0, guessed: new Set(), answer: randomWord()});
  };

  gameStage = () => {
    let stage;
    if (this.state.nWrong < this.props.maxWrong && this.state.nRight !== this.state.answer.length) {
      stage = <p className="Hangman-btns">{this.generateButtons()}</p>;
    } else if (this.state.nWrong < this.props.maxWrong && this.state.nRight === this.state.answer.length) {
      stage = <p>You win!</p>;
    } else {
      stage = <p>You Lose!</p>;
    }
    return stage;
  };

  /** render: render game */
  render() {
    console.log(this.state.answer);
    let alt = `${this.state.nWrong} wrong guesses`;
    let gameStage = this.gameStage();

    return (
      <div>
        <div className="Hangman">
          <h1>Hangman</h1>
          <img src={this.props.images[this.state.nWrong]} alt={alt} />
          <p>Number wrong: {this.state.nWrong}</p>
          <p className="Hangman-word">{this.guessedWord()}</p>
          {gameStage}
        </div>
        <button className="Hangman-restart" onClick={this.handleRestart}>Play Again!</button>
      </div>
    );
  }
}

export default Hangman;
