import { FilterContext } from "../../../contexts/FilterContext";
import { TasksContext } from "../../../contexts/TasksList";
import { Task } from "../Task/Task";
import { useContext, useMemo, useState } from "react";
import { NewTask } from "../NewTask/NewTask";
import "./Tasks.css";
import DeleteTask from "../../pop-ups/delete pop-up/DeleteTask";
import EditTask from "../../pop-ups/Edit pop-up/EditTask";
import { SnackBarContext } from "../../../contexts/SnackBarContext";
import { DispatchContext } from "../../../contexts/dispatchReducerContext";

export function Tasks() {
  const { myTasksArr, setMyTasksArr } = useContext(TasksContext);
  const { tasksFilter } = useContext(FilterContext);
  const [showDelete, setShowDelete] = useState(false);
  const [dialogTask, setDialogTask] = useState(null);
  const [showEdit, setShowEdit] = useState(false);

  const { showHideSnackBar } = useContext(SnackBarContext);

  const { dispatch } = useContext(DispatchContext);
  //this will be triggered by the button inside tasks (the openEdit as well with edit button)
  function openDeleteDialog(task) {
    setShowDelete(true);
    setDialogTask(task);
  }
  function handleDeleteclick() {
    const newArr = myTasksArr.filter((taskFil) => taskFil.id !== dialogTask.id);
    setMyTasksArr(newArr);
    localStorage.setItem("Todos", JSON.stringify(newArr));

    setShowDelete(false);
    showHideSnackBar("Task has been Deleted");
  }

  function openEditDialog(task) {
    setShowEdit(true);
    setDialogTask(task);
  }
  function handleEdit(editedTask) {
    dispatch({
      type: "EDIT_TODO",
      payLoad: {
        task: editedTask,
      },
    });
    setShowEdit(false);
    showHideSnackBar("Task has been edited");
  }
  //filtering logic
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
        <Task
          task={task}
          openDeleteDialog={openDeleteDialog}
          openEditDialog={openEditDialog}
        />
      </li>
    ));
  }, [myFinalTasksArr]);

  return (
    <>
      <ul
        className="tasks-list"
        style={{
          margin: "30px auto",
          height: "350px",
          overflowY: "scroll",
          width: "500px",
        }}
      >
        {myUlTasks}
      </ul>
      <DeleteTask
        open={showDelete}
        handleDelete={handleDeleteclick}
        closeDialog={() => setShowDelete(false)}
      />
      {showEdit && (
        <EditTask
          passedTask={dialogTask}
          open={showEdit}
          handleEdit={handleEdit}
          closeDialog={() => setShowEdit(false)}
        />
      )}
    </> // I need to pass toggle delete + the handle delete function
  );
}
