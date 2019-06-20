/*********************************************************************************
 *                                  REDUCERS                                      *
 **********************************************************************************/

import { ADD_TODO, MARK_COMPLETE, REMOVE_COMPLETE } from "../actions";

/* remove this and see what happens */
const initialState = {
  task: "",
  todos: [
    {
      value: "Mark me complete!",
      completed: false
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return;

    case MARK_COMPLETE:
      return;

    case REMOVE_COMPLETE:
      return;

    default:
      return state;
  }
};

export default reducer;
