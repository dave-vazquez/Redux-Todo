import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const ListContainer = styled.div`
  flex-grow: 99;
  flex-basis: 50px;
  width: 100%;

  overflow-y: auto;
`;

class TodoList extends React.Component {
  render() {
    const { todos, filters } = this.props;
    console.log("TodoList.js props", this.props);

    return (
      <ListContainer>
        {todos.map(
          (todo, i) =>
            (todo.completed === filters.completed ||
              filters.completed === "all") &&
            todo.category === filters.category && (
              <Todo
                key={i}
                todoID={i}
                todo={todo.todo}
                completed={todo.completed}
              />
            )
        )}
      </ListContainer>
    );
  }
}

export default TodoList;
