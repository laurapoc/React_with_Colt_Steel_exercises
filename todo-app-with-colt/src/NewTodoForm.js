import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.createTodo({...this.state, id: uuidv4()});
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          placeholder="New Todo"
          id="task"
          //   name has to match exactly what is in the state:
          name="task"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}
