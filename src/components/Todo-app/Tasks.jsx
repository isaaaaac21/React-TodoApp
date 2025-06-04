import { TasksContext } from "../../contexts/TasksList";
import { Task } from "./Task/Task";
import { useContext } from "react";

export function Tasks() {
  const { myTasksArr, setMyTasksArr } = useContext(TasksContext);

  const myUlTasks = myTasksArr.map((task) => (
    <li key={task.id}>
      <Task task={task} />
    </li>
  ));
  return <ul style={{ margin: "30px auto" }}>{myUlTasks}</ul>;
}
