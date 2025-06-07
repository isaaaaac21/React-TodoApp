import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { TasksContext } from "../../../contexts/TasksList";

import { v4 as uuidv4 } from "uuid";

export function NewTask() {
  const [taskName, setTaskName] = useState("");
  const { myTasksArr, setMyTasksArr } = useContext(TasksContext);

  const newTaksId =
    myTasksArr.length === 0 ? 1 : myTasksArr[myTasksArr.length - 1].id + 1;

  function handleAddClick() {
    if (taskName.trim() !== "") {
      setMyTasksArr((prev) => [
        ...prev,
        { id: newTaksId, title: taskName, details: "", isDone: false },
      ]);
      setTaskName("");
    }
  }
  console.log(typeof uuidv4());
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
      }}
    >
      <TextField
        id="outlined-required"
        placeholder="Task Title"
        sx={{ flex: 2 }}
        size="small"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ flex: 1 }}
        onClick={handleAddClick}
        disabled={taskName.trim() === ""}
      >
        Add
      </Button>
    </Box>
  );
}
