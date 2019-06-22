/*********************************************************************************
 *                                  REDUCERS                                      *
 **********************************************************************************/

import { ADD_TODO, MARK_COMPLETE, CLEAR_COMPLETED } from "../actions";

/* remove this and see what happens */
const initialState = {
  todos: [
    {
      task: "Mark me complete!",
      completed: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      };

    case MARK_COMPLETE:
      return {
        todos: state.todos.map((todo, i) =>
          i === action.payload ? { ...todo, completed: !todo.completed } : todo
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
