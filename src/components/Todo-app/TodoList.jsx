import { useEffect, useState } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import ToggleButtons from "./ToggleButtons";
import { Tasks } from "./tasks/Tasks";
import Container from "@mui/material/Container";

export function TodoList() {
  const [tasksFilter, setTasksFilter] = useState("All");

  return (
    <FilterContext.Provider value={{ tasksFilter, setTasksFilter }}>
      <Container className="container" maxWidth="sm">
        <h1 style={{ fontFamily: "Work-sans" }}>My Tasks</h1>
        <ToggleButtons></ToggleButtons>
        <Tasks></Tasks>
      </Container>
    </FilterContext.Provider>
  );
}
