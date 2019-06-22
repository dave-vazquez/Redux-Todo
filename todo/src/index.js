import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle"
import reducer from "./reducers";
import App from "./App";
import "./index.css";

const persistedState = loadState();
const store = createStore(reducer, persistedState);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}), 1000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
