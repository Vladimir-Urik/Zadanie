import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
              {/* TODO - Add [user] route */}
          </Route>
      </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
