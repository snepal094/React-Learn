import React from "react";
import { Button, IconButton, Rating } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ModeEdit } from "@mui/icons-material";

function Car(props) {
  return (
    <div
      style={{
        // width: "300px",
        padding: "1rem",
        margin: "2rem",
        borderRadius: "1rem",
        boxShadow:
          props.price > 100000
            ? "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px"
            : "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={props.image}
        alt={props.altText}
        style={{ height: 400, width: 400 }}
      />
      <h2>Name: {props.name}</h2>
      <h3>Brand: {props.brand}</h3>
      <h3>Price: ${props.price}</h3>

      <Rating name="size-small" defaultValue={props.stars} size="small" />
      <br />
      <Button variant="outlined" color="primary" endIcon={<ModeEdit />}>
        Edit Car
      </Button>
      <br />
      <Button
        variant="outlined"
        color="error"
        endIcon={<DeleteOutlineIcon />}
        onClick={() => {
          alert("Deleted");
        }}
      >
        Delete Car
      </Button>
    </div>
  );
}

export default Car;
