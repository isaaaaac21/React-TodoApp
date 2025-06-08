import { FilterContext } from "../../../contexts/FilterContext";
import { TasksContext } from "../../../contexts/TasksList";
import { Task } from "../Task/Task";
import { useContext } from "react";
import { NewTask } from "../NewTask/NewTask";
import "./Tasks.css";
export function Tasks() {
  const { myTasksArr } = useContext(TasksContext);

  let myFinalTasksArr = [];
  const { tasksFilter } = useContext(FilterContext);

  if (tasksFilter === "All") {
    myFinalTasksArr = [...myTasksArr];
  } else if (tasksFilter === "Completed") {
    myFinalTasksArr = myTasksArr.filter((task) => task.isDone === true);
  } else {
    myFinalTasksArr = myTasksArr.filter((task) => task.isDone === false);
  }

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
