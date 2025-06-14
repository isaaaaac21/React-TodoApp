function handleAddNewTodo(tasksArr, newTask) {
  const newArr = [...tasksArr, newTask];
  localStorage.setItem("Todos", JSON.stringify(newArr));

  return newArr;
}

function handleEditTodo(taskArr, editedTask) {
  console.log(editedTask);
  const newArr = taskArr.map((currTask) => {
    if (currTask.id === editedTask.id) {
      return {
        ...currTask,
        title: editedTask.title,
        details: editedTask.details,
      };
    }
    return currTask;
  });

  localStorage.setItem("Todos", JSON.stringify(newArr));
  return newArr;
}
function handleDeleteTodo(taskArr, dialogTask) {
  const newArr = taskArr.filter((taskFil) => taskFil.id !== dialogTask.id);
  localStorage.setItem("Todos", JSON.stringify(newArr));
  return newArr;
}
function handleDoneTodo(taskArr, doneTask) {
  const newArr = taskArr.map((taskMap) => {
    if (taskMap.id === doneTask.id) {
      return { ...taskMap, isDone: true };
    }
    return taskMap;
  });
  localStorage.setItem("Todos", JSON.stringify(newArr));

  return newArr;
}
export function todoReducer(currentTodosState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return handleAddNewTodo(currentTodosState, action.payLoad.task);
    case "EDIT_TODO":
      return handleEditTodo(currentTodosState, action.payLoad.task);
    case "DELETE_TODO":
      return handleDeleteTodo(currentTodosState, action.payLoad.task);
    case "DONE_TASK":
      return handleDoneTodo(currentTodosState, action.payLoad.task);
    case "LOCAL_SAVED_TASKS":
      return action.payLoad.tasks;
    default:
      break;
  }
}
