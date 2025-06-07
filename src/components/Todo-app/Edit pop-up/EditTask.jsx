import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Stack, TextField } from "@mui/material";
import "./edit.css";
import { useState } from "react";

export default function EditTask({ passedTask, handleEdit, togglePopUp }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  return (
    <div className="over-lay">
      <Box className="box" sx={{ p: 2, border: "1px" }}>
        <h3>Edit Task</h3>
        <div>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            sx={{ mb: 2, width: "100%" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Details"
            variant="standard"
            sx={{ mb: 3, width: "100%" }}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <Stack
          className="stack"
          spacing={1}
          direction="row"
          sx={{ justifyContent: "flex-end" }}
        >
          <Button variant="contained" color="error" onClick={togglePopUp}>
            Cancel
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => handleEdit(title, details, passedTask)}
          >
            Edit
          </Button>
        </Stack>
      </Box>
      {/* <Alert className="alert" severity="success">
        This is a success Alert.
      </Alert> */}
    </div>
  );
}
