import { useState } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import ToggleButtons from "./ToggleButtons";
import { Tasks } from "./tasks/Tasks";

export function FilterTasks() {
  const [tasksFilter, setTasksFilter] = useState("All");

  return (
    <FilterContext.Provider value={{ tasksFilter, setTasksFilter }}>
      <ToggleButtons></ToggleButtons>
      <Tasks></Tasks>
    </FilterContext.Provider>
  );
}
