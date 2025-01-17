import React from 'react';
import { Box, Typography } from '@mui/material';

const CustomTypography = () => {
  return (
    <Box>
      {/* Box==div but in MUI */}
      <Typography color="error" gutterBottom sx={{ fontSize: '55px' }}>
        Hello Mom
      </Typography>
      {/* gutterBottom= padding below */}
      <Typography variant="h1">Hello Mom</Typography>
      <Typography variant="h2">Hello Mom</Typography>
      <Typography variant="subtitle1">Hello Mom</Typography>
    </Box>
  );
};

export default CustomTypography;
