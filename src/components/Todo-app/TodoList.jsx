import ToggleButtons from "./ToggleButtons";
import { Tasks } from "./tasks/Tasks";
import Container from "@mui/material/Container";
import { NewTask } from "./NewTask/NewTask";
import SnackBar from "../pop-ups/SnackBar";

export function TodoList() {
  return (
    <Container className="container" maxWidth="sm">
      <h1 style={{ fontFamily: "Work-sans", color: "#34495E" }}>My Tasks</h1>
      <ToggleButtons></ToggleButtons>
      <Tasks></Tasks>
      <NewTask></NewTask>
      <SnackBar />
    </Container>
  );
}
