//16th Dec
import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Animal = () => {
  const [text, setText] = useState("random text");
  return (
    <Box>
      <Typography variant="h3">{text}</Typography>
      {/* textfield=input  */}
      <TextField
        placeholder="Type something..."
        variant="filled"
        color="success"
        onChange={(event) => {
          console.log(event.target.value);
          setText(event.target.value);
        }}
      />

      <TextField
        label="Name?"
        variant="outlined"
        color="info"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </Box>
  );
};

export default Animal;
