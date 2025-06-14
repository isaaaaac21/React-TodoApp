import { createContext, useReducer, useEffect } from "react";
import { todoReducer } from "../reducers/todoReducer";
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
export const ReducerContext = createContext({});

export const ReducerProvider = ({ children }) => {
  const [myTasksArr, dispatch] = useReducer(todoReducer, tasks);
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("Todos"));
    if (savedTasks) {
      dispatch({
        type: "LOCAL_SAVED_TASKS",
        payLoad: {
          tasks: savedTasks,
        },
      });
    }
  }, []);
  return (
    <ReducerContext.Provider value={{ myTasksArr, dispatch }}>
      {children}
    </ReducerContext.Provider>
  );
};
