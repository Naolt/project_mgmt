"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FormLabel, TextField } from "@mui/material";
import { useVerifyMutation } from "@/store/services/authApi";
import { setUser } from "@/store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const VerifySchema = Yup.object().shape({
  code: Yup.string().required("Verification code is required"),
});

const Verify = () => {
  const [verify] = useVerifyMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector((state) => state.user);

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: VerifySchema,
    onSubmit: async (values) => {
      try {
        console.log("Verifying code...");
        const verifyData = await verify({ ...values, id: state.id }).unwrap();
        console.log("Verification Data", verifyData);
        // Store user data and token in localStorage
        if (verifyData) {
          localStorage.setItem("user", JSON.stringify(verifyData));
          dispatch(setUser({ ...verifyData }));
          router.push("./");
        }
      } catch (error) {
        console.log("Error verifying code:", error);
      }
    },
  });

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
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          width: "400px",
          height: "fit-content",
          border: "1px solid #ccc",
          padding: 4,
          my: 4,
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormLabel htmlFor="code" sx={{ marginTop: 2, marginBottom: 1 }}>
          Verification Code
        </FormLabel>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            p: 2,
          }}
        >
          <img src={`${state.totpUri}`} width={"100px"} height={"100px"} />
        </Box>
        <TextField
          id="code"
          name="code"
          variant="outlined"
          size="small"
          type="text"
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.touched.code && Boolean(formik.errors.code)}
          helperText={formik.touched.code && formik.errors.code}
        />

        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Verify
        </Button>
      </Box>
    </Box>
  );
};

export default Verify;
