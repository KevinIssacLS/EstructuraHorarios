import "./assets/Global.css";
import ReactDom from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserProvider } from "./Components/UserSession/UserContext.jsx";

ReactDom.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>
  // <Inicio></Inicio>
);
