import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import { setupStore } from "./store";

import CssBaseline from "@mui/material/CssBaseline";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <CssBaseline />
    <BrowserRouter>
      <Provider store={setupStore()}>
        <App />
      </Provider>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
