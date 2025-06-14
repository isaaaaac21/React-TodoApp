import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles"; // Changed this line
import { theme } from "./contexts/ThemeContext";
import { TodoList } from "./components/Todo-app/TodoList";
import { FilterContext } from "./contexts/FilterContext";
import { SnackBarProvider } from "./contexts/SnackBarContext";
import { ReducerProvider } from "./contexts/ReducerContext";
function App() {
  const [tasksFilter, setTasksFilter] = useState("All");
  return (
    <ReducerProvider>
      <ThemeProvider theme={theme}>
        <FilterContext.Provider value={{ tasksFilter, setTasksFilter }}>
          <SnackBarProvider>
            <TodoList />
          </SnackBarProvider>
        </FilterContext.Provider>
      </ThemeProvider>
    </ReducerProvider>
  );
}

export default App;
