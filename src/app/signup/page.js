"use client";
import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  TextField,
  Button,
  FormLabel,
  Typography,
  Box,
  OutlinedInput,
  IconButton,
  InputAdornment,
  FormHelperText,
} from "@mui/material";
import Link from "next/link";
import * as Yup from "yup";
import zxcvbn from "zxcvbn";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { useSignUpMutation } from "@/store/services/authApi";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .test("password-strength", "Password is too weak", (value) => {
      const result = zxcvbn(value);
      return result.score >= 3; // Adjust the minimum required score as needed
    }),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = React.useState(false);
  const [signUp] = useSignUpMutation();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const theme = useTheme();
  const handleSubmit = async (values) => {
    try {
      await signUp(values);
      console.log("registered successfully!");
      router.push("/signin");
    } catch (error) {
      console.error("Failed to sign up", error);
    }
  };
  useEffect(() => {
    if (user) {
      router.push("./");
    }
  }, []);

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
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, values }) => (
            <Form style={{ display: "flex", flexDirection: "column" }}>
              {/* ... other form fields ... */}
              <FormLabel htmlFor="username" sx={{ marginTop: 2 }}>
                User name
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

              <FormLabel htmlFor="email" sx={{ marginTop: 2 }}>
                Email
              </FormLabel>
              <Field
                name="email"
                as={TextField}
                id="outlined-basic"
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
                as={OutlinedInput}
                id="outlined-basic"
                variant="outlined"
                size="small"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                error={touched.password && !!errors.password}
                helperText={touched.password && errors.password}
              />
              <FormHelperText
                id="outlined-password-helper-text"
                sx={{ color: theme.palette.error.main }}
              >
                {touched.password &&
                  !!errors.password &&
                  errors.password +
                    ". " +
                    "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character."}
              </FormHelperText>

              <FormLabel htmlFor="confirmPassword" sx={{ marginTop: 2 }}>
                Confirm Password
              </FormLabel>
              <Field
                name="confirmPassword"
                as={TextField}
                id="outlined-basic"
                variant="outlined"
                size="small"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                error={touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
              />

              {/* ... other form fields ... */}
              <Typography variant="p" component="p" sx={{ mt: 2 }}>
                Already have an account?{" "}
                <Link
                  href={"/signin"}
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Sign in
                </Link>
              </Typography>
              <Button
                type="submit"
                variant="contained"
                sx={{ justifySelf: "flex-end", mt: 3 }}
                disabled={touched && Object.keys(errors).length > 0}
              >
                Sign up
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Signup;
