/*********************************************************************************
 *                                    ACTIONS                                     *
 **********************************************************************************/

export const ADD_TODO = "ADD_TODO";
export const MARK_COMPLETE = "MARK_COMPLETE";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTodo = task => {
  console.log("actions/index.js", ADD_TODO, task);
  return {
    type: ADD_TODO,
    payload: task
  };
};

export const markComplete = todoID => {
  console.log("actions/index.js", MARK_COMPLETE, todoID);
  return {
    type: MARK_COMPLETE,
    payload: todoID
  };
};

export const clearCompleted = todoIDs => {
  console.log("actions/index.js", CLEAR_COMPLETED, todoIDs);
  return {
    type: CLEAR_COMPLETED
  };
};
