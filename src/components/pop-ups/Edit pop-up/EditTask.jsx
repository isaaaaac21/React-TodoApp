import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";
import "./edit.css";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function EditTask({ open, handleEdit, togglePopUp }) {
  const [editedTask, setEditedTask] = useState({ title: "", details: "" });

  return (
    <Dialog open={open} onClose={togglePopUp} maxWidth="xs">
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
        <Button onClick={togglePopUp}>Cancel</Button>
        <Button onClick={() => handleEdit(editedTask)}>Edit</Button>
      </DialogActions>
    </Dialog>
  );
}
