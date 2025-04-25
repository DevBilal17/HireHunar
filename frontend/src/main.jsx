import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { CookiesProvider } from "react-cookie";
import AuthContext from "./Contexts/AuthContext.jsx";
import ApiContext from "./Contexts/ApiContext.jsx";
import JobApiContext from "./Contexts/JobApiContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <CookiesProvider> */}
    <AuthContext>
      <ApiContext>
        <JobApiContext>
          <App />
        </JobApiContext>
      </ApiContext>
    </AuthContext>
    {/* </CookiesProvider> */}
  </BrowserRouter>
);
