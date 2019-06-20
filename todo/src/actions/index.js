/*********************************************************************************
*                                    ACTIONS                                     *
**********************************************************************************/ 
export const ADD_TODO = 'ADD_TODO';
export const MARK_COMPLETE = 'MARK_COMPLETE';
export const REMOVE_COMPLETE = 'REMOVE_COMPLETE';

export const addTodo = (todo) => {
	return {
		type: ADD_TODO,
		payload: todo
	}
};

export const markComplete = (todoID) => {
	return {
		type: MARK_COMPLETE,
		payload: todoID
	}
};

export const removeComplete = (todoIDs) => {
	return {
		type: MARK_COMPLETE,
		payload: todoIDs
	}
};