import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./CardsDeck.css";

export default class CardsDeck extends Component {
  state = {
    cardId: "",
    cardPile: [],
  };

  componentDidMount() {
    axios
      .get("https://deckofcardsapi.com/api/deck/new/shuffle")
      .then((response) => {
        let data = response.data;
        this.setState({ cardId: data.deck_id });
      });
  }

  async getCard() {
    let deck_id = this.state.cardId;
    try {
      let response = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deck_id}/draw/`
      );
      if (!response.data.success) {
        this.setState({ gameOver: true });
        throw new Error("No cards left");
      }

      this.setState((st) => ({
        cardPile: [
          ...st.cardPile,
          {
            imageSource: response.data.cards[0].image,
            cardName: response.data.cards[0].value,
            id: response.data.cards[0].code,
          },
        ],
      }));
    } catch (error) {
      alert(error);
    }
  }

  render() {
    let cards = this.state.cardPile.map((card) => (
      <Card key={card.id} imageSource={card.imageSource} alt={card.cardName} />
    ));
    return (
      <div>
        <h1 className="Deck-title">Card dealer</h1>
        <h2 className="Deck-title subtitle">🔷Demo made with React🔷</h2>
        <button onClick={() => this.getCard()}>Get New Card!</button>

        <div className="Card-area">{cards}</div>
      </div>
    );
  }
}
