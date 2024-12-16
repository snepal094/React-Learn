import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Student = () => {
  const [student, setStudent] = useState({
    name: "Suyasha",
    age: 22,
  });
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Name: {student.name}
      </Typography>
      <Typography variant="h4" gutterBottom>
        Age: {student.age}
      </Typography>
      <TextField
        label="Enter name here"
        gutterBottom
        onChange={(event) => {
          const name = event.target.value;
          setStudent({ ...student, name: name });
        }}
      />
      <TextField
        label="Enter age here"
        type="number"
        gutterBottom
        onChange={(e) => {
          const age = e.target.value;
          setStudent({ ...student, age: age });
        }}
      />
    </Box>
  );
};

export default Student;
