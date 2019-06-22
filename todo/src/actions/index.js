/*********************************************************************************
 *                                    ACTIONS                                     *
 **********************************************************************************/

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const MARK_COMPLETE = "MARK_COMPLETE";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTodo = todo => {
  console.log("actions/index.js", ADD_TODO, todo);
  return {
    type: ADD_TODO,
    todo
  };
};

export const deleteTodo = todoID => {
  return {
    type: DELETE_TODO,
    todoID
  };
};

export const markComplete = todoID => {
  console.log("actions/index.js", MARK_COMPLETE, todoID);
  return {
    type: MARK_COMPLETE,
    todoID
  };
};

export const clearCompleted = () => {
  console.log("actions/index.js", CLEAR_COMPLETED);
  return {
    type: CLEAR_COMPLETED
  };
};
