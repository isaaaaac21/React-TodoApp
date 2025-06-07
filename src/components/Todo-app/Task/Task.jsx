import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack"; // Fixed import
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@emotion/react";
import "./task.css";
import { useContext, useState } from "react";
import { TasksContext } from "../../../contexts/TasksList";
import EditTask from "../Edit pop-up/EditTask";
export function Task({ task }) {
  const theme = useTheme();
  const { myTasksArr, setMyTasksArr } = useContext(TasksContext);
  const [showEdit, setShowEdit] = useState(false);

  //This works and now I need to make it using popUp
  function handleEdit(tit, det, passedTask) {
    const newArr = myTasksArr.map((currTask) => {
      if (currTask.id === passedTask.id) {
        return {
          ...passedTask,
          title: tit === "" ? passedTask.title : tit,
          details: det,
        };
      }
      return currTask;
    });
    setMyTasksArr(newArr);
    toggleEditPopUp();
  }

  function toggleEditPopUp() {
    setShowEdit((prev) => !prev);
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
    <>
      <Box
        className="task"
        sx={{
          backgroundColor: theme.palette.info.main,
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
            <Typography variant="h6" style={{ fontFamily: "Work-sans" }}>
              {task.title}
            </Typography>
            <Typography variant="subtitle2">{task.details}</Typography>
          </Grid>

          {/* <Grid size={4}> */}
          <Stack size={1} direction="row" spacing={2}>
            <IconButton
              className={"icons" + (task.isDone ? " done" : " hover")}
              sx={{}}
              onClick={() => handleDoneClick(task.id)}
              disabled={task.isDone}
            >
              <CheckOutlinedIcon color="secondary" />
            </IconButton>
            <IconButton
              className={`icons ${!task.isDone ? "hover" : ""}`}
              sx={{}}
              onClick={toggleEditPopUp}
              disabled={task.isDone}
            >
              <EditOutlinedIcon color="info" />
            </IconButton>
            <IconButton
              className={`icons ${!task.isDone ? "hover" : ""}`}
              sx={{}}
              onClick={() => handleDeleteClick(task.id)}
            >
              <DeleteOutlineOutlinedIcon color="primary" />
            </IconButton>
          </Stack>
        </Grid>
        {/* </Grid> */}
      </Box>
      {showEdit && (
        <EditTask
          passedTask={task}
          handleEdit={handleEdit}
          togglePopUp={toggleEditPopUp}
        />
      )}
    </>
  );
}
