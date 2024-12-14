import React from "react";
import { Button, IconButton } from "@mui/material";
import "./buttons.styles.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const CustomButton = () => {
  return (
    <div>
      <section id="variant-section" className="button-section">
        <h1>Button Variants</h1>
        <Button variant="text">text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">Outlined</Button>
      </section>

      <section id="color-section" className="button-section">
        <h1>Button Color</h1>
        <Button color="primary" variant="contained">
          primary
        </Button>
        <Button color="secondary" variant="contained">
          secondary
        </Button>
        <Button color="success" variant="contained">
          success
        </Button>
        <Button color="error" variant="contained">
          error
        </Button>
        <Button color="warning" variant="contained">
          warning
        </Button>
        <Button color="info" variant="contained">
          info
        </Button>
        <Button sx={{ background: "#0c6896", color: "#fff" }}>
          Random Color
        </Button>
      </section>

      <section id="size-section" className="button-section">
        <h1>Button Sizes</h1>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </section>

      <section id="icon-buttons" className="button-section">
        <h1>Icon Buttons (Button with Icon)</h1>
        <Button
          variant="outlined"
          color="success"
          sx={{ textTransform: "lowercase" }}
          endIcon={<ModeEditIcon />}
        >
          edit product
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{ textTransform: "capitalize" }}
          startIcon={<DeleteOutlineIcon />}
          onClick={() => {
            alert("Deleted");
          }}
        >
          delete product
        </Button>
        {/* default: sx={{ textTransform: "uppercase" }} */}
      </section>

      <section id="icon-button" className="button-section">
        <h1>Icon Button</h1>
        <IconButton color="error">
          <ModeEditIcon />
        </IconButton>
        <IconButton color="blue">
          <DeleteOutlineIcon />
        </IconButton>
      </section>
    </div>
  );
};

export default CustomButton;
