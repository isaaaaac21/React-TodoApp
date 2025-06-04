import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack"; // Fixed import
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@emotion/react";
import "./task.css";
import { useContext } from "react";
import { TasksContext } from "../../../contexts/TasksList";

export function Task({ task }) {
  const theme = useTheme();
  const { myTasksArr, setMyTasksArr } = useContext(TasksContext);

  //This works and now I need to make it using popUp
  function handleEditClick(id) {
    const newTasksArr = myTasksArr.map((taskMap) => {
      if (taskMap.id === id) {
        return { ...taskMap, title: taskMap.title + " Edited" };
      }
      return taskMap;
    });
    setMyTasksArr(newTasksArr);
  }
  function handleDeleteClick(id) {
    const newArr = myTasksArr.filter((taskFil) => taskFil.id !== id);
    setMyTasksArr(newArr);
  }
  function handleDoneClick(id) {
    const newTasksArr = myTasksArr.map((taskMap) => {
      if (taskMap.id === id) {
        return { ...taskMap, isDone: true };
      }
      return taskMap;
    });
    setMyTasksArr(newTasksArr);
  }
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.info.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        padding: "10px",
        marginBottom: "10px",
        color: "white",
      }}
    >
      <div className="texts">
        <Typography variant="h4">{task.title} </Typography>
        <Typography variant="subtitle1">{task.details}</Typography>
      </div>
      <Stack direction="row" spacing={2}>
        <IconButton
          className={"icons" + (task.isDone ? " done" : "")}
          sx={{}}
          onClick={() => handleDoneClick(task.id)}
          disabled={task.isDone}
        >
          <CheckOutlinedIcon color="secondary" sx={{ border: "none" }} />
        </IconButton>
        <IconButton
          className="icons"
          sx={{}}
          onClick={() => {
            handleEditClick(task.id);
          }}
          disabled={task.isDone}
        >
          <EditOutlinedIcon color="info" />
        </IconButton>
        <IconButton
          className="icons"
          sx={{}}
          onClick={() => handleDeleteClick(task.id)}
        >
          <DeleteOutlineOutlinedIcon color="primary" />
        </IconButton>
      </Stack>
    </Box>
  );
}
