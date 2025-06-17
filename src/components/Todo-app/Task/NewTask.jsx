import { TextField, Button, Box } from "@mui/material";
import { useState, useContext } from "react";
import { useTodos } from "../../../contexts/ReducerContext";
import { SnackBarContext } from "../../../contexts/SnackBarContext";
import { v4 as uuidv4 } from "uuid";

export function NewTask() {
  const { dispatch } = useTodos();
  const [taskName, setTaskName] = useState("");
  const { showHideSnackBar } = useContext(SnackBarContext);

  function handleAddClick() {
    if (taskName.trim() !== "") {
      const newTask = {
        id: uuidv4(),
        title: taskName,
        details: "",
        isDone: false,
      };
      dispatch({
        type: "ADD_TODO",
        payLoad: {
          task: newTask,
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
        flexDirection: "row",

        gap: 2,
        width: "100%",
        margin: "0 auto",
        alignItems: "center", // Align items vertically
      }}
    >
      <TextField
        id="outlined-required"
        placeholder="Task Title"
        sx={{ flex: 2, width: "100%" }}
        size="small"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{
          flex: "0 0 auto", // Don't grow or shrink, use natural size
          minWidth: "80px", // Minimum button width
          whiteSpace: "nowrap", // Prevent text wrapping
        }}
        onClick={handleAddClick}
        disabled={taskName.trim() === ""}
      >
        Add
      </Button>
    </Box>
  );
}
