function handleAddNewTodo(tasksArr, newTask) {
  const newArr = [...tasksArr, newTask];
  localStorage.setItem("Todos", JSON.stringify(newArr));

  return newArr;
}

function handleEditTodo(taskArr, editedTask) {
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

export function todoReducer(currentTodosState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return handleAddNewTodo(currentTodosState, action.payLoad.task);
      break;
    case "EDIT_TODO":
      return handleEditTodo(currentTodosState, action.payLoad.task);
      break;
    default:
      break;
  }
}
