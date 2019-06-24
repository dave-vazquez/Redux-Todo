import React from "react";
import { connect } from "react-redux";
import { markComplete, deleteTodo } from "../actions/todos";
import styled from "styled-components";

const TodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 50px;

  padding: 0 10px;
  cursor: pointer;

  border-bottom: 1px solid black;
`;

class Todo extends React.Component {
  render() {
    const { todo, todoID, completed } = this.props;
    return (
      <TodoContainer>
        <span
          style={{
            textDecoration: `${completed ? "line-through" : "none"}`
          }}
        >
          {todo}
        </span>
        <div>
          <button onClick={() => this.props.markComplete(todoID)}>
            Mark Complete
          </button>
          <button onClick={() => this.props.deleteTodo(todoID)}>Delete</button>
        </div>
      </TodoContainer>
    );
  }
}

export default connect(
  null,
  { markComplete, deleteTodo }
)(Todo);
