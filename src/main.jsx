import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material/styles"; // Changed this line
import { theme } from "./contexts/ThemeContext";
import { NewTask } from "./components/Todo-app/NewTask/NewTask.jsx";
import { Task } from "./components/Todo-app/Task/Task.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
