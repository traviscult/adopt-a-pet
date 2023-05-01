import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const { worker } = require("./mocks/browser");
worker.start();
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
