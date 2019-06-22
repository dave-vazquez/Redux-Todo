import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Todo from "./Todo";
import { addTodo, markComplete, clearCompleted } from "../actions/index";

const TodoListContainer = styled.div`
  width: 500px;
  height: fit-content;

  border: 1px solid black;
`;

const TodoForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;

  border-bottom: 1px solid grey;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
`;

class TodoList extends React.Component {
  state = {
    task: "",
    todos: []
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodoHandler = e => {
    e.preventDefault();

    this.props.addTodo({
      task: this.state.task,
      completed: false
    });

    this.setState({
      task: ""
    });
  };

  markCompleteHandler = i => {
    this.props.markComplete(i);
  };

  clearCompletedHandler = () => {
    this.props.clearCompleted();
  };

  render() {
    console.log(this.props.todos);
    return (
      <TodoListContainer>
        <TodoForm onSubmit={this.addTodoHandler}>
          <input
            type="text"
            name="task"
            value={this.state.task}
            placeholder="Add New Task"
            onChange={this.onChangeHandler}
          />
          <button onClick={this.addTodoHandler}>+</button>
        </TodoForm>
        {this.props.todos.map((todo, i) => (
          <Todo 
            key={i}
            taskID={i} 
            task={todo.task}
            completed={todo.completed}
          />
        ))}
        <ButtonContainer>
          <button onClick={this.clearCompletedHandler}>Clear Complete</button>
        </ButtonContainer>
      </TodoListContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, markComplete, clearCompleted }
)(TodoList);
