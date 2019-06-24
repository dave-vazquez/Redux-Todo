import React from "react";
import styled from "styled-components";
import TodoList from "./components/TodoList";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <TodoList />
      </AppContainer>
    );
  }
}

export default App;
