import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import home from "./home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <home />
  </StrictMode>
)
