import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

//hooks: react functions having a specific task
//example: useState, useEffect, useRef, useCallback, useMemo
//third-party hooks: redux=>useSelector, useDispatch
//router: useNavigate

//? event: onClick, onChange, onKeyPress, onSubmit, onScroll

const Counter = () => {
  //   let count = 1;
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    let newCount = count - 1;
    setCount(newCount);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
    <Box>
      <Typography variant="h3">Count: {count}</Typography>
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
  );
};

export default Counter;
