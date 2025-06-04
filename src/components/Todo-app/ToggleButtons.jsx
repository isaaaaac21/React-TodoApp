import { useState, useContext } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { TasksContext } from "../../contexts/TasksList";
import { FilterContext } from "../../contexts/FilterContext";

export default function ToggleButtons() {
  const { tasksFilter, setTasksFilter } = useContext(FilterContext);

  function handleFilterChange(e) {
    setTasksFilter(e.target.value);
  }

  return (
    <ToggleButtonGroup
      value={tasksFilter}
      exclusive
      onChange={(e) => handleFilterChange(e)}
      aria-label="text alignment"
    >
      <ToggleButton value="All" aria-label="left aligned">
        All
      </ToggleButton>
      <ToggleButton value="Completed" aria-label="centered">
        Completed
      </ToggleButton>
      <ToggleButton value="Not Completed" aria-label="right aligned">
        Not Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
