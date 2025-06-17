import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";
import { useState, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { SnackBarContext } from "../../contexts/SnackBarContext";

export default function EditTask({
  passedTask,
  open,
  handleEdit,
  closeDialog,
}) {
  const [editedTask, setEditedTask] = useState(passedTask);
  return (
    <Dialog
      open={open}
      onClose={closeDialog}
      maxWidth="xs"
      sx={{
        "& .MuiDialog-paper": {
          margin: { sm: "20px", xs: "32px" },
          width: { sm: "calc(100% - 40px)", xs: "auto" },
        },
      }}
    >
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          fullWidth
          variant="standard"
          value={editedTask.title}
          onChange={(e) => {
            setEditedTask({ ...editedTask, title: e.target.value });
          }}
        />
        <TextField
          margin="dense"
          label="Task Details"
          fullWidth
          variant="standard"
          value={editedTask.details}
          onChange={(e) => {
            setEditedTask({ ...editedTask, details: e.target.value });
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancel</Button>
        <Button
          onClick={() => {
            handleEdit(editedTask);
          }}
          disabled={
            passedTask.title === editedTask.title &&
            passedTask.details === editedTask.details
          }
        >
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
