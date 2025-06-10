import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack"; // Fixed import
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@emotion/react";
import "./task.css";
import { useContext } from "react";
import { TasksContext } from "../../../contexts/TasksList";
import EditTask from "../../pop-ups/Edit pop-up/EditTask";
import DeleteTask from "../../pop-ups/delete pop-up/DeleteTask";

export function Task({ task, openDeleteDialog, openEditDialog }) {
  const theme = useTheme();
  const { myTasksArr, setMyTasksArr } = useContext(TasksContext);

  function handleDeleteClick() {
    openDeleteDialog(task);
  }
  function handleEditClick() {
    openEditDialog(task);
  }
  function handleDoneClick() {
    const newArr = myTasksArr.map((taskMap) => {
      if (taskMap.id === task.id) {
        return { ...taskMap, isDone: true };
      }
      return taskMap;
    });
    setMyTasksArr(newArr);
    localStorage.setItem("Todos", JSON.stringify(newArr));
  }
  return (
    <Box
      className="task"
      sx={{
        backgroundColor: theme.palette.info.dark,
        padding: "10px",
        marginBottom: "10px",
        color: "white",
      }}
    >
      <Grid
        className="grid-task"
        container
        spacing={2}
        sx={{ placeItems: "center" }}
      >
        <Grid size={7} sx={{ textAlign: "left", marginRight: 3 }}>
          <Typography
            variant="h6"
            style={{
              fontFamily: "Work-sans",
              textDecoration: task.isDone ? "line-through" : "",
            }}
          >
            {task.title}
          </Typography>
          <Typography variant="subtitle2">{task.details}</Typography>
        </Grid>

        {/* <Grid size={4}> */}
        <Stack size={1} direction="row" spacing={2}>
          <IconButton
            className={"icons" + (task.isDone ? " done" : " hover")}
            sx={{}}
            onClick={() => handleDoneClick()}
            disabled={task.isDone}
          >
            <CheckOutlinedIcon color="secondary" />
          </IconButton>
          <IconButton
            className={`icons ${!task.isDone ? "hover" : ""}`}
            sx={{}}
            onClick={handleEditClick}
            disabled={task.isDone}
          >
            <EditOutlinedIcon color="info" />
          </IconButton>
          <IconButton
            className={`icons ${!task.isDone ? "hover" : ""}`}
            sx={{}}
            onClick={() => handleDeleteClick()}
          >
            <DeleteOutlineOutlinedIcon color="primary" />
          </IconButton>
        </Stack>
      </Grid>
    </Box>
  );
}
