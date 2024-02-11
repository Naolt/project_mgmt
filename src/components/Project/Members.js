import {
  Avatar,
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
import MemberCard from "./MemberCard";

const Members = ({ close }) => {
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
          padding: "30px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Access Control
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            type="email"
            placeholder="Email"
            sx={{ flex: 1 }}
          />
          <Button variant="outlined">Invite</Button>
        </Box>

        <FormLabel htmlFor="title" sx={{ my: 2 }}>
          Members
        </FormLabel>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <MemberCard email={"naoltamrat11@gmail.com"} />
          <MemberCard email={"naoltamrat11@gmail.com"} />
          <MemberCard email={"naoltamrat11@gmail.com"} />
          <MemberCard email={"naoltamrat11@gmail.com"} />
        </Box>
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
            Done
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Members;
