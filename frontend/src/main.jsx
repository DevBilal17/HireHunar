import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./Contexts/UserContext.jsx";
import AuthContext from "./Contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
  </AuthContext>
);
