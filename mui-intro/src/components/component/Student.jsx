import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Student = () => {
  const [student, setStudent] = useState({
    name: 'Suyasha',
    age: 22,
  });
  return (
    <>
      <Typography variant="h4">Name: {student.name}</Typography>
      <Typography variant="h4">Age: {student.age}</Typography>
      <Box sx={{ mt: '1rem', display: 'flex', gap: '1rem' }}>
        <TextField
          label="Enter name here"
          onChange={(event) => {
            const name = event.target.value;
            setStudent({ ...student, name: name });
          }}
        />
        <TextField
          label="Enter age here"
          type="number" //for increment/decrement arrows
          onChange={(e) => {
            const age = e.target.value;
            setStudent({ ...student, age: age });
          }}
        />
      </Box>
    </>
  );
};

export default Student;
