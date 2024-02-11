import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";

const AddProject = ({ close }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        backgroundColor: "rgb(0,0,0,0.5)",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          width: "500px",
          backgroundColor: "#ddd",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Add Project
        </Typography>
        <FormLabel htmlFor="title">Title</FormLabel>
        <TextField id="outlined-basic" variant="outlined" size="small" />
        <FormLabel htmlFor="title" sx={{ marginTop: 2 }}>
          Description
        </FormLabel>
        <textarea
          id="description"
          style={{
            backgroundColor: "transparent",
            borderRadius: "3px",
            maxWidth: "inherit",
            padding: "10px",
          }}
          maxLength={200}
        />
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "flex-end",
            marginTop: 4,
          }}
        >
          <Button type="submit" variant="text" size="small" onClick={close}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" size="small">
            Add Project
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProject;
