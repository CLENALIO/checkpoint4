import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserConnexionContextProvider } from "./context/UserConnexionContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserConnexionContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserConnexionContextProvider>
);
