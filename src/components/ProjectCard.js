import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ title, description, id }) => {
  return (
    <Link href={`/${id}`} style={{ textDecoration: "none", color: "#333" }}>
      <Box
        sx={{
          width: "270px",
          height: "150px",
          p: 3,
          backgroundColor: "#fff",
          border: "1px solid #eee",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          boxShadow: "0 0 10px rgba(200,200,200,0.3)",
          "&:hover": {
            backgroundColor: "#eee",
          },
        }}
      >
        {/* ProjectCard */}
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {description}
        </Typography>
      </Box>
    </Link>
  );
};

export default ProjectCard;
