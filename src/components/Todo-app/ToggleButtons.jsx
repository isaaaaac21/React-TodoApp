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
      sx={{
        mt: 2.5,
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        "& .MuiToggleButton-root": {
          padding: { xs: "5px", sm: "8px" },
          fontSize: { xs: "0.7rem", sm: "0.8rem" },
          whiteSpace: "nowrap",
          width: "100%",
        },
        "& .MuiToggleButtonGroup-grouped": {
          "&:not(:first-of-type)": {
            marginLeft: "-1px",
          },
        },
      }}
    >
      <ToggleButton
        size="small"
        value="All"
        aria-label="left aligned"
        style={{ fontFamily: "Work-sans" }}
      >
        All
      </ToggleButton>
      <ToggleButton
        size="small"
        value="Completed"
        aria-label="centered"
        style={{ fontFamily: "Work-sans" }}
      >
        Completed
      </ToggleButton>
      <ToggleButton
        size="small"
        value="Not Completed"
        aria-label="right aligned"
        style={{ fontFamily: "Work-sans" }}
      >
        Not Completed
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
