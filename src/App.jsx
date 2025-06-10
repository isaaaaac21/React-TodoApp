import { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles"; // Changed this line
import { theme } from "./contexts/ThemeContext";
import { TasksContext } from "./contexts/TasksList";
import { TodoList } from "./components/Todo-app/TodoList";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Complete React Tutorial",
      details:
        "Work through the React fundamentals tutorial on the official docs",
      isDone: false,
    },
    {
      id: 2,
      title: "Build Todo App",
      details:
        "Create a todo application using React to practice state management",
      isDone: true,
    },
    {
      id: 3,
      title: "Review Code",
      details:
        "Review and refactor the code for better performance and readability",
      isDone: false,
    },
    {
      id: 4,
      title: "Write Documentation",
      details: "Document the components and functionality of the todo app",
      isDone: false,
    },
    {
      id: 5,
      title: "Add Styling",
      details: "Implement CSS styling to improve the user interface",
      isDone: false,
    },
  ];
  const [myTasksArr, setMyTasksArr] = useState(tasks);
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("Todos"));
    if (savedTasks) {
      setMyTasksArr(savedTasks);
    }
  }, []);
  return (
    <TasksContext.Provider value={{ myTasksArr, setMyTasksArr }}>
      <ThemeProvider theme={theme}>
        <TodoList />
      </ThemeProvider>
    </TasksContext.Provider>
  );
}

export default App;
