import { Avatar, Box, MenuItem, Select, Typography } from "@mui/material";
import React from "react";

const MemberCard = ({ email }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Avatar alt={email} />
        <Typography variant="body1" component="p" gutterBottom>
          {email}
        </Typography>
      </Box>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        size="small"
        defaultValue={"View"}
      >
        <MenuItem value={"View"}>View</MenuItem>
        <MenuItem value={"Edit"}>Edit</MenuItem>
      </Select>
    </Box>
  );
};

export default MemberCard;
