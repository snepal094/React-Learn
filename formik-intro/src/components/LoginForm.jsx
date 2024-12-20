import React, { useState } from "react"; // Import useState
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import icons for visibility toggle

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false); // Manage password visibility state

  // Toggle password visibility
  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3">LogIn Form</Typography>
      <br />
      <Formik
        initialValues={{ name: "", password: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Name is a required field.")
            .trim()
            .max(55, "Character limit exceeded."),
          password: Yup.string()
            .required("Password is a required field.")
            .min(10, "Minimum 10 characters required."),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
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
            <FormControl>
              <TextField
                required
                label="Username"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <FormHelperText error>{formik.errors.name}</FormHelperText>
              )}
            </FormControl>

            <FormControl>
              <TextField
                required
                label="Password"
                type={showPassword ? "text" : "password"} // Toggle input type based on showPassword
                {...formik.getFieldProps("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {formik.touched.password && formik.errors.password && (
                <FormHelperText error>{formik.errors.password}</FormHelperText>
              )}
            </FormControl>

            <Button variant="contained" color="success" type="submit">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
