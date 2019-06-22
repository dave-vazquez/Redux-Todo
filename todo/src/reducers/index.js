/*********************************************************************************
 *                                  REDUCERS                                      *
 **********************************************************************************/

import {
  ADD_TODO,
  DELETE_TODO,
  MARK_COMPLETE,
  CLEAR_COMPLETED
} from "../actions";

/* remove this and see what happens */
const initialState = {
  todos: [
    {
      todo: "Mark me complete!",
      completed: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.todo]
      };

    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo, i) => i !== action.todoID)
      };

    case MARK_COMPLETE:
      return {
        todos: state.todos.map((todo, i) =>
          i === action.todoID ? { ...todo, completed: !todo.completed } : todo
        )
      };

    case CLEAR_COMPLETED:
      return {
        todos: state.todos.filter(todo => !todo.completed)
      };

    default:
      return state;
  }
};

export default reducer;
