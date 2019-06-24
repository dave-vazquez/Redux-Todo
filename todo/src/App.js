import React from "react";
import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import { connect } from "react-redux";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const TodoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 500px;

  height: 100vh;

  border: 1px solid black;
`;

class App extends React.Component {
  state = {
    todos: [],
    filters: {}
  };

  render() {
    const { todos, filters } = this.props;
    console.log("App.js props", this.props);
    return (
      <AppContainer>
        <TodoCard>
          <TodoForm />
          <TodoList todos={todos} filters={filters} />
          <TodoFilters />
        </TodoCard>
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    filters: state.filters
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);

/*

  How I would want to use a todo app:

  Current Day:

  1) TodoList: 
    Current Date, 
    Progress Made,

  2) Todo: Due Time, 
           Show past due for single day, 
           Option to push to future date (w/ opt due time,
           Categorize

  Overall User Interface:
    
    Todo List View:
      Show Current Day on "Login"
      Page forward and Backwards to different date
      Filter by category for that date, or show all.

    Calendar View:
      Shows past to-do lists, and a score for percentage complete
      Shows future to-do lists,
      Push all uncompleted tasks to future todo-list or existing one,
      
    Category Filter:
      Filter by custom category: work, grocieries, student, etc.
    
*/
