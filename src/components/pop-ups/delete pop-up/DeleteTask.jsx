import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle"; // Fixed import path

export default function DeleteTask({ open, handleDelete, toggleDeletePopUp }) {
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClose={toggleDeletePopUp}
        maxWidth="xs"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this task? "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone. The task will be permanently deleted
            from your list.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDeletePopUp} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
