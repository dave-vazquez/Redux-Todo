/*********************************************************************************
 *                                  REDUCERS                                      *
 **********************************************************************************/

import { SHOW_ALL, SHOW_COMPLETED, SHOW_INCOMPLETE } from "../actions/filters";

const initialState = {
  completed: "all",
  category: "default"
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return {
        filters: {
          ...state,
          completed: undefined
        }
      };

    case SHOW_COMPLETED:
      return {
        filters: {
          ...state,
          completed: true
        }
      };

    case SHOW_INCOMPLETE:
      return {
        filters: {
          ...state,
          completed: false
        }
      };

    default:
      return state;
  }
};

export default filters;
