import { FilterContext } from "../../../contexts/FilterContext";
import { TasksContext } from "../../../contexts/TasksList";
import { Task } from "../Task/Task";
import { useContext, useMemo } from "react";
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

  const myFinalTasksArr = useMemo(() => {
    const filterFn = filterMap[tasksFilter] || filterMap["All"];
    return filterFn([...myTasksArr]);
  }, [myTasksArr, tasksFilter]);

  const myUlTasks = useMemo(() => {
    return myFinalTasksArr.map((task) => (
      <li key={task.id}>
        <Task task={task} />
      </li>
    ));
  }, [myFinalTasksArr]);

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
