"use client";
import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, FormLabel, Typography, Box } from "@mui/material";
import Link from "next/link";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const About = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log("Form submitted:", values);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          width: "400px",
          height: "fit-content",
          border: "1px solid #ccc",
          padding: 4,
          my: 4,
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form style={{ display: "flex", flexDirection: "column" }}>
              <FormLabel htmlFor="username" sx={{ marginTop: 2 }}>
                Username
              </FormLabel>
              <Field
                name="username"
                as={TextField}
                id="outlined-basic"
                variant="outlined"
                size="small"
                type="text"
                error={touched.username && !!errors.username}
                helperText={touched.username && errors.username}
              />

              <FormLabel htmlFor="password" sx={{ marginTop: 2 }}>
                Password
              </FormLabel>
              <Field
                name="password"
                as={TextField}
                id="outlined-basic"
                variant="outlined"
                size="small"
                type="password"
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />

              <Typography variant="p" component="p" sx={{ mt: 2 }}>
                Doesn't have an account?{" "}
                <Link
                  href={"/signup"}
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Sign up
                </Link>
              </Typography>
              <Button
                type="submit"
                variant="contained"
                sx={{ justifySelf: "flex-end", mt: 3 }}
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default About;
