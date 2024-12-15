import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { getFullName } from "../../utils/utils";

const Person = () => {
  const [firstName, setFirstName] = useState("Siddhant");
  const [lastName, setLastName] = useState("Shrestha");

  let college = "KEC";
  return (
    <Box>
      <Typography variant="h3">
        Name: {getFullName(firstName, lastName)}
      </Typography>
      <Typography variant="h5">College: {college}</Typography>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          //auto-batching by react, executes both functions in a batch
          setFirstName("Saugat");
          setLastName("Neupane");
        }}
      >
        Change Data
      </Button>
    </Box>
  );
};

export default Person;
