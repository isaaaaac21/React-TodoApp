import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
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
        sx={{
          justifyContent: { xs: "", sm: "space-between" },
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1, sm: 2 },
          flexWrap: "nowrap", // Prevents container from wrapping
        }}
      >
        <Grid
          item
          className="grid-title"
          xs={12}
          sm={8}
          sx={{
            textAlign: { xs: "center", sm: "left" },
            minWidth: 0, // Allows text to wrap within Grid item
            wordWrap: "break-word",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h6"
            style={{
              fontFamily: "Work-sans",
              textDecoration: passedTask.isDone ? "line-through" : "",
              wordWrap: "break-word",
              overflow: "hidden",
            }}
          >
            {passedTask.title}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              wordWrap: "break-word",
            }}
          >
            {passedTask.details}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-end" },
            flexShrink: 0, // Prevents buttons from shrinking
          }}
        >
          <Stack direction="row" spacing={2}>
            <IconButton
              className={"icons" + (passedTask.isDone ? " done" : " hover")}
              onClick={() => handleDoneClick()}
              disabled={passedTask.isDone}
            >
              <CheckOutlinedIcon color="secondary" />
            </IconButton>
            <IconButton
              className={`icons ${!passedTask.isDone ? "hover" : ""}`}
              onClick={handleEditClick}
              disabled={passedTask.isDone}
            >
              <EditOutlinedIcon color="info" />
            </IconButton>
            <IconButton
              className={`icons ${!passedTask.isDone ? "hover" : ""}`}
              onClick={() => handleDeleteClick()}
            >
              <DeleteOutlineOutlinedIcon color="primary" />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
