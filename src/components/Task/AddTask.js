import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";

const AddTask = ({ close }) => {
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
          Add Task
        </Typography>
        <FormLabel htmlFor="title">Title</FormLabel>
        <TextField id="outlined-basic" variant="outlined" size="small" />
        <FormLabel htmlFor="title" sx={{ marginTop: 2 }}>
          Due Date
        </FormLabel>
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          type="date"
        />
        <FormLabel htmlFor="title" sx={{ marginTop: 2 }}>
          Assignee
        </FormLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          size="small"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
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
            Add Task
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddTask;
