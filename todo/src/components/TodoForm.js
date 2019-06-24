import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { addTodo } from "../actions/todos";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;

  flex-grow: 1;

  padding: 0 10px;

  border-bottom: 1px solid grey;
`;

class TodoForm extends React.Component {
  state = {
    todo: ""
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodoHandler = e => {
    e.preventDefault();

    this.props.addTodo({
      todo: this.state.todo,
      completed: false,
      category: "default"
    });

    this.setState({
      todo: ""
    });
  };

  render() {
    return (
      <Form>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          placeholder="Add New Task"
          onChange={this.onChangeHandler}
        />
        <button onClick={this.addTodoHandler}>+</button>
      </Form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(TodoForm);
