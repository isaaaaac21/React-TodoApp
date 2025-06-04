import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { useTheme } from "@mui/material/styles"; // Changed this line
import { TasksContext } from "../../../contexts/TasksList";
import { Details, Title } from "@mui/icons-material";

export function NewTask() {
  const [taskName, setTaskName] = useState("");
  const { myTasksArr, setMyTasksArr } = useContext(TasksContext);
  const newTaksId =
    myTasksArr.length === 0 ? 1 : myTasksArr[myTasksArr.length - 1].id + 1;

  function handleAddClick() {
    setMyTasksArr((prev) => [
      ...prev,
      { id: newTaksId, title: taskName, details: "", isDone: false },
    ]);
  }
  console.log("re-ender");
  console.log(myTasksArr[myTasksArr.length - 1]);
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-required"
        label="Task Title"
        sx={{ flex: "2", margin: "0px !important" }}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{
          height: "56px",
          width: "fit-content",
          flex: "1",
          margin: "0px !important",
          outline: "none !important",
        }}
        onClick={handleAddClick}
      >
        Add
      </Button>
    </Box>
  );
}
