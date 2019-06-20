import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { addTodo, removeComplete } from "../actions/index";
import Todo from "./Todo";

const TodoListContainer = styled.div`
  width: 500px;
  height: fit-content;

  border: 1px solid black;
`;

const TodoForm = styled.form`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 10px;

  border-bottom: 1px solid grey;
`;

const ClearButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
`;

class TodoList extends React.Component {

	state = {
		task: ""
	}

  onChangeHandler = e => {
		this.setState({
			task: e.target.value
		})
	};

	addTodoHandler = e => {
		e.preventDefault();
	};
	
	markCompleteHandler = () => {

	}

  render() {
    return (
      <TodoListContainer>
        <TodoForm onSubmit={this.onSubmitHandler}>
          <input
            type="text"
            value=""
            placeholder="Add New Task"
            onChange={this.onChangeHandler}
          />
          <button>+</button>
        </TodoForm>
				{
					this.props.todos.map(todo => (
						<Todo />
					))
				}
				<ClearButtonContainer>
					<button onClick={this.markCompleteHandler}>Clear Complete</button>
				</ClearButtonContainer>
      </TodoListContainer>
    );
  }
};

const mapStateToProps = state => {
	return {
		todos: state.todos
	}
}

export default connect(
	mapStateToProps, { addTodo, removeComplete }
)(TodoList);
