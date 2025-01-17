import { Margin } from '@mui/icons-material';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Book = () => {
  //   const [book, setBook] = useState("Digital Fortress");

  //   const [book1, setBook1] = useState({
  //     name: "Digital Fortress",
  //     author: "Dan Brown",
  //   });

  const [book, setBook] = useState([
    { id: 1, name: 'The Casual Vacancy' },
    { id: 2, name: 'Will Grayson, Will Grayson' },
    { id: 3, name: 'Going Solo' },
    { id: 4, name: 'Ghachar Ghochar' },
    { id: 5, name: 'Five People You Meet In Heaven' },
  ]);

  return (
    <Box>
      <Typography variant="h2" sx={{ mb: '1rem' }}>
        Book List
      </Typography>

      {book.map((item) => {
        return (
          <Stack
            key={item.id}
            direction="row"
            gap={5}
            sx={{ marginBottom: '2rem' }}
          >
            <Typography variant="h4" gutterBottom key={item.id}>
              {item.name}
            </Typography>

            <Button
              variant="contained"
              color="error"
              onClick={() => {
                const itemId = item.id;
                const newArray = book.filter((item) => {
                  return item.id !== itemId;
                });
                setBook(newArray);
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

export default Book;
