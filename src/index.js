import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./style.scss";

ReactDOM.render(
  <React.StrictMode>
    <App defaultEmail="test@gmail.com" />
  </React.StrictMode>,
  document.getElementById("root")
);
