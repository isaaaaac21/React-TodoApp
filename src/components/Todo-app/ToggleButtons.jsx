import { useContext } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
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
      sx={{ mt: 2.5 }} // This is equivalent to marginTop: 2 * 8px = 16px
    >
      <ToggleButton size="small" value="All" aria-label="left aligned">
        All
      </ToggleButton>
      <ToggleButton size="small" value="Completed" aria-label="centered">
        Completed
      </ToggleButton>
      <ToggleButton
        size="small"
        value="Not Completed"
        aria-label="right aligned"
      >
        Not Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
