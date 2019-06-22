import React from "react";
import { connect } from "react-redux";
import { markComplete } from "../actions";
import styled from "styled-components";

const TodoContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;

  padding-left: 10px;
  cursor: pointer;

  border-bottom: 1px solid black;
`;

class Todo extends React.Component {
  render() {
    const { task, taskID, completed } = this.props;
    return (
      <TodoContainer onClick={() => this.props.markComplete(taskID)}>
        <span
          style={{
            textDecoration: `${completed ? "line-through" : "none"}`
          }}
        >
          {task}
        </span>
      </TodoContainer>
    );
  }
}

export default connect(
  null,
  { markComplete }
)(Todo);
