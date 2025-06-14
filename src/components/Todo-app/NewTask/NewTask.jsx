import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { TasksContext } from "../../../contexts/TasksList";

import { v4 as uuidv4 } from "uuid";
import { SnackBarContext } from "../../../contexts/SnackBarContext";
import { ReducerContext } from "../../../contexts/ReducerContext";

export function NewTask() {
  const [taskName, setTaskName] = useState("");
  const { showHideSnackBar } = useContext(SnackBarContext);

  const { dispatch } = useContext(ReducerContext);

  function handleAddClick() {
    if (taskName.trim() !== "") {
      dispatch({
        type: "ADD_TODO",
        payLoad: {
          task: { id: uuidv4(), title: taskName, details: "", isDone: false },
        },
      });
      setTaskName("");
      showHideSnackBar("Task has been added");
    }
  }
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
