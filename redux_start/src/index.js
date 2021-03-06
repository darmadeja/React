import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import counterReducer from "./store/reducers/counterReducer";
import resultReducer from "./store/reducers/resultReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  result: resultReducer
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
