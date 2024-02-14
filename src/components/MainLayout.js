"use client";
import { unSetUser } from "@/store/slices/userSlice";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const MainLayout = ({ children }) => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDownload = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/export", {
        responseType: "blob", // Important for handling binary data
      });

      // Create a Blob from the response data
      const blob = new Blob([response.data], { type: "application/zip" });

      // Create a link element and trigger a download
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = "data.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading data:", error);
      // Handle error
    }
  };

  return (
    <Box sx={{ padding: 4, display: "flex", flexDirection: "column" }}>
      {state.token && (
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            onClick={handleDownload}
            variant="contained"
            sx={{ width: "fit-content", alignSelf: "flex-end" }}
          >
            Export
          </Button>
          <Button
            onClick={() => dispatch(unSetUser())}
            variant="contained"
            sx={{ width: "fit-content", alignSelf: "flex-end" }}
          >
            Logout
          </Button>
        </Box>
      )}
      <Box>{children}</Box>
    </Box>
  );
};

export default MainLayout;
