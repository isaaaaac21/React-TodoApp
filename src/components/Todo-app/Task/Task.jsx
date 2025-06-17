import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack"; // Fixed import
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@emotion/react";
import "./task.css";
import { useTodos } from "../../../contexts/ReducerContext";

export function Task({ passedTask, openDeleteDialog, openEditDialog }) {
  const theme = useTheme();
  const { dispatch } = useTodos();

  function handleDeleteClick() {
    openDeleteDialog(passedTask);
  }
  function handleEditClick() {
    openEditDialog(passedTask);
  }
  function handleDoneClick() {
    dispatch({
      type: "DONE_TASK",
      payLoad: {
        task: passedTask,
      },
    });
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
              textDecoration: passedTask.isDone ? "line-through" : "",
            }}
          >
            {passedTask.title}
          </Typography>
          <Typography variant="subtitle2">{passedTask.details}</Typography>
        </Grid>

        {/* <Grid size={4}> */}
        <Stack size={1} direction="row" spacing={2}>
          <IconButton
            className={"icons" + (passedTask.isDone ? " done" : " hover")}
            sx={{}}
            onClick={() => handleDoneClick()}
            disabled={passedTask.isDone}
          >
            <CheckOutlinedIcon color="secondary" />
          </IconButton>
          <IconButton
            className={`icons ${!passedTask.isDone ? "hover" : ""}`}
            sx={{}}
            onClick={handleEditClick}
            disabled={passedTask.isDone}
          >
            <EditOutlinedIcon color="info" />
          </IconButton>
          <IconButton
            className={`icons ${!passedTask.isDone ? "hover" : ""}`}
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
