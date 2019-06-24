import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "./reducers/todos";
import filters from "./reducers/filters";
import { saveState } from "./localStorage";
import throttle from "lodash/throttle";
import reducer from "./reducers/filters";
import App from "./App";
import "./index.css";

const todoApp = combineReducers({
  todos,
  filters
});

const store = createStore(todoApp);

console.log("store", store.getState());

store.subscribe(
  throttle(() => {
    saveState({
      todos: store.getState().todos,
      filters: store.getState().filters
    });
  }),
  1000
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
