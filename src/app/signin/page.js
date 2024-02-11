"use client";
import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, FormLabel, Typography, Box } from "@mui/material";
import Link from "next/link";
import * as Yup from "yup";
import { useSignInMutation } from "@/store/services/authApi";
import { setUser } from "@/store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const About = () => {
  const [signIn] = useSignInMutation();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    if (user) {
      router.push("./");
    }
  }, []);

  const handleSubmit = async (values) => {
    // Handle form submission here
    try {
      console.log("Signing in...");
      const loginData = await signIn(values).unwrap();
      console.log("Login Data", loginData);
      // Store user data and token in localStorage
      if (loginData) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...loginData,
          })
        );
        dispatch(setUser(loginData));
        router.push("./");
      }
    } catch (error) {
      console.log("Error Signing in:", error);
    }
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
                Email
              </FormLabel>
              <Field
                name="email"
                as={TextField}
                id="email"
                variant="outlined"
                size="small"
                type="email"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />

              <FormLabel htmlFor="password" sx={{ marginTop: 2 }}>
                Password
              </FormLabel>
              <Field
                name="password"
                as={TextField}
                id="password"
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
                disabled={touched && Object.keys(errors).length > 0}
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
