import { ADD_TODO, DELETE_TODO, MARK_COMPLETE } from "../actions/todos";

const initialState = [
  {
    todo: "Mark me complete!",
    completed: false,
    category: "default"
  }
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state, action.todo]
      };

    case DELETE_TODO:
      return {
        todos: state.filter((todo, i) => i !== action.todoID)
      };

    case MARK_COMPLETE:
      return {
        todos: state.map((todo, i) =>
          i === action.todoID ? { ...todo, completed: !todo.completed } : todo
        )
      };

    default:
      return state;
  }
};

export default todos;
