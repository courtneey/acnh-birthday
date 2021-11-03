import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./components/Routes";

console.log("my store:", store.getState());

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("main")
);
