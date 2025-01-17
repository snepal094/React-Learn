import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';

//hooks: react functions having a specific task
//example: useState, useEffect, useRef, useCallback, useMemo
//third-party hooks: redux=>useSelector, useDispatch
//router: useNavigate

//? event: onClick, onChange, onKeyPress, onSubmit, onScroll

const Counter = () => {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    let newCount = count - 1;
    setCount(newCount);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Count: {count}
      </Typography>
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            let newCount = count + 1;
            setCount(newCount);
          }}
        >
          Increase Count
        </Button>

        <Button variant="contained" color="success" onClick={decreaseCount}>
          Decrease Count
        </Button>

        <Button variant="contained" color="secondary" onClick={resetCount}>
          Reset Count
        </Button>
      </Box>
    </>
  );
};

export default Counter;
