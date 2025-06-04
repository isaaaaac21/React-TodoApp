import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack"; // Fixed import
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@emotion/react";
import "./task.css";
export function Task({ task }) {
  const theme = useTheme();
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
        <IconButton className="icons" sx={{}}>
          <CheckOutlinedIcon color="secondary" sx={{ border: "none" }} />
        </IconButton>
        <IconButton className="icons" sx={{}}>
          <EditOutlinedIcon color="info" />
        </IconButton>
        <IconButton className="icons" sx={{}}>
          <DeleteOutlineOutlinedIcon color="primary" />
        </IconButton>
      </Stack>
    </Box>
  );
}
