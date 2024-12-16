import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const Actors = () => {
  const [heroes, setHeroes] = useState([
    {
      id: 1,
      name: "Rajesh Hamal",
    },
    {
      id: 2,
      name: "Nikil Upreti",
    },
    {
      id: 3,
      name: "Biraj Bhatta",
    },
  ]);
  return (
    <Box>
      <Typography variant="h3" gutterBottom>
        Hero List
      </Typography>
      {heroes.map((item) => {
        return (
          <Stack
            key={item.id}
            direction="row"
            gap={5}
            sx={{ marginBottom: "2rem" }}
          >
            <Typography variant="h5" key={item.id} gutterBottom>
              {item.name}
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                const itemId = item.id;
                const newArray = heroes.filter((item) => {
                  return item.id !== itemId;
                });
                setHeroes(newArray);
              }}
            >
              delete
            </Button>
          </Stack>
        );
      })}
    </Box>
  );
};

export default Actors;
