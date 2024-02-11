import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import { FormLabel, TextField } from "@mui/material";
import Link from "next/link";

export default function Verify() {
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
        <FormLabel htmlFor="title" sx={{ marginTop: 2, marginBottom: 1 }}>
          Verification Code
        </FormLabel>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          type="text"
        />

        <Button variant="contained" sx={{ justifySelf: "flex-end", mt: 3 }}>
          Verify
        </Button>
      </Box>
    </Box>
  );
}
