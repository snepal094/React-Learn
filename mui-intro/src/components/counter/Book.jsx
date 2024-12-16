import { Margin } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Book = () => {
  //   const [book, setBook] = useState("Digital Fortress");

  //   const [book1, setBook1] = useState({
  //     name: "Digital Fortress",
  //     author: "Dan Brown",
  //   });

  const [book2, setBook2] = useState([
    { id: 1, name: "The Casual Vacancy" },
    { id: 2, name: "Will Grayson, Will Grayson" },
    { id: 3, name: "Going Solo" },
    { id: 4, name: "Ghachar Ghochar" },
    { id: 5, name: "Five People You Meet In Heaven" },
  ]);

  return (
    <Box>
      <Typography variant="h2">Book List</Typography>

      {/* <Typography variant="h4" gutterBottom>
        {book}
      </Typography> */}
      {/* <TextField
        placeholder="Name of the book"
        gutterBottom
        color="info"
        onChange={(event) => {
          setBook(event.target.value);
        }}
      ></TextField> */}

      {/* <Typography variant="h4" gutterBottom>
        Name: {book1.name}
      </Typography>
      <Typography variant="h5" gutterBottom>
        Author: {book1.author}
      </Typography> */}
      {/* <TextField
        placeholder="Name?"
        onChange={(event) => {
          const name = event.target.value;
          setBook1({ ...book1, name: name });
        }}
      ></TextField>
      <TextField
        placeholder="Author?"
        onChange={(event) => {
          const author = event.target.value;
          setBook1({ ...book1, author: author });
        }}
      ></TextField> */}

      {book2.map((item) => {
        return (
          <Stack
            key={item.id}
            direction="row"
            gap={5}
            sx={{ marginBottom: "2rem" }}
          >
            <Typography variant="h4" gutterBottom key={item.id}>
              {item.name}
            </Typography>

            <Button
              variant="contained"
              color="error"
              onClick={() => {
                const itemId = item.id;
                const newArray = book2.filter((item) => {
                  return item.id !== itemId;
                });
                setBook2(newArray);
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
