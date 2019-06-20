import React from "react";
import styled from "styled-components";

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 50px;

  padding-left: 10px;
`;

class Todo extends React.Component {
  onClickHandler = () => {};

  render() {
    return (
      <TodoWrapper onClick={this.onClickHandler}>
        <span>Todo</span>
      </TodoWrapper>
    );
  }
}

export default Todo;
