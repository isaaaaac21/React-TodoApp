import { FilterContext } from "../../../contexts/FilterContext";
import { TasksContext } from "../../../contexts/TasksList";
import { Task } from "../Task/Task";
import { useContext, useEffect } from "react";
import { NewTask } from "../NewTask/NewTask";
import "./Tasks.css";

export function Tasks() {
  const { myTasksArr } = useContext(TasksContext);
  const { tasksFilter } = useContext(FilterContext);

  const filterMap = {
    All: (tasks) => tasks,
    Completed: (tasks) => tasks.filter((task) => task.isDone),
    "Not Completed": (tasks) => tasks.filter((task) => !task.isDone),
  };

  const filterFn = filterMap[tasksFilter] || filterMap["All"];
  const myFinalTasksArr = filterFn([...myTasksArr]);

  const myUlTasks = myFinalTasksArr.map((task) => (
    <li key={task.id}>
      <Task task={task} />
    </li>
  ));

  return (
    <>
      <ul
        className="tasks-list"
        style={{
          margin: "30px auto",
          maxHeight: "250px",
          minHeight: "250px",
          overflowY: "scroll",
          width: "500px",
        }}
      >
        {myUlTasks}
      </ul>
      <NewTask></NewTask>
    </>
  );
}
