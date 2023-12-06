

import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const months = [
  "THIS MONTH",
  "LAST WEEK",
  "LAST MONTH",
  "TODAY",
];

// eslint-disable-next-line react/prop-types
export default function BasicSelect({ handleMonth }) {
  const [month, setMonth] = React.useState("THIS MONTH");

  const handleChange = (event) => {
    setMonth(event.target.value);
    handleMonth(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 180  }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Duration</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Duration"
          sx={{height:"2rem" , width:"10rem" }}
          onChange={handleChange}
        >
          {months.map((month, index) => {
            return (
              <MenuItem value={month} key={index}>
                {month}{" "}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}