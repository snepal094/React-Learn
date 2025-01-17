//16th Dec
import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Animal = () => {
  const [text, setText] = useState('random text');
  return (
    <>
      <Typography variant="h3" gutterBottom>
        {text}
      </Typography>
      {/* textfield=input  */}
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <TextField
          placeholder="Type something..."
          variant="filled"
          color="success"
          onChange={(event) => {
            console.log(event);
            console.log(event.target.value);
            setText(event.target.value);
          }}
        />
        {/* onChange, onClick, onScroll are all events */}

        <TextField
          label="Name?"
          variant="outlined"
          color="info"
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
      </Box>
    </>
  );
};

export default Animal;
