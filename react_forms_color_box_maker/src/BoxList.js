import React, { Component } from "react";
import Box from "./Box";
import NewBoxform from "./NewBoxform";
import { v4 as uuidv4 } from "uuid";

export default class BoxList extends Component {
  state = {
    items: [
      
    ],
  };

  addItem = (item) => {
    let newItem = { ...item, id: uuidv4() };
    this.setState((st) => ({
      items: [...st.items, newItem],
    }));
    console.log(item.id);
  };

  renderItems = () => {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            <Box
              width={item.width}
              height={item.height}
              backgroundColor={item.backgroundColor}
            />
          </li>
        ))}
      </ul>
    );
  };

  render() {
    console.log(this.state.items);
    return (
      <div>
        <h1> Hello from Box list</h1>
        <NewBoxform addItem={this.addItem} />
        {this.renderItems()}
      </div>
    );
  }
}
