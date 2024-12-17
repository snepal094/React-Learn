import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const UserForm = () => {
  return (
    <Box>
      <Typography variant="h3">User Data Collection</Typography>

      <Formik
        initialValues={{ name: "" }}
        validationSchema={Yup.object({
          //object: to validate the object inside initialValues
          name: Yup.string()
            .required("Name is required.")
            .trim()
            .max(55, "Character limit exceeded."),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
                border: "1px solid black",
                padding: "1rem",
                minWidth: "400px",
              }}
            >
              {/* form control is a div */}
              <FormControl>
                <TextField label="Username" {...formik.getFieldProps("name")} />

                {/* to show error message */}
                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : // error gives red color
                null}
              </FormControl>

              <Button variant="contained" color="success" type="submit">
                Submit
              </Button>
            </form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default UserForm;
