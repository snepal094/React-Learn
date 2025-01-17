import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const UserForm = () => {
  return (
    <Box>
      <Typography variant="h3">User Data Collection</Typography>
      {/* we make forms inside Formik */}
      <Formik
        initialValues={{ name: '', age: '', address: '' }}
        validationSchema={Yup.object({
          //object: to validate the object inside initialValues
          name: Yup.string()
            .required('Name is required.')
            .trim()
            .max(55, 'Character limit exceeded.'),
          age: Yup.number()
            .required('Age is a required field.')
            .max(120)
            .positive(),
          address: Yup.string()
            .required('Address is a required field.')
            .trim()
            .max(55, 'Character limit exceeded.'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          console.log(formik);
          //explains formik.errors.name, etc.
          return (
            <form
              onSubmit={formik.handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '1rem',
                border: '1px solid black',
                padding: '1rem',
                minWidth: '400px',
              }}
            >
              {/* form control is a div */}
              <FormControl sx={{ display: 'flex', gap: '1rem' }}>
                <TextField label="Username" {...formik.getFieldProps('name')} />
                {/* to show error message */}
                {formik.touched.name && formik.errors.name ? (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                ) : // error gives red color
                null}
                <TextField
                  label="Age"
                  type="number"
                  {...formik.getFieldProps('age')}
                />
                {formik.touched.age && formik.errors.age ? (
                  <FormHelperText error>{formik.errors.age}</FormHelperText>
                ) : null}
                <TextField
                  label="Address"
                  {...formik.getFieldProps('address')}
                />
                {formik.touched.address && formik.errors.address ? (
                  // <p error>{formik.errors.address}</p>
                  <FormHelperText error>{formik.errors.address}</FormHelperText>
                ) : null}
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
