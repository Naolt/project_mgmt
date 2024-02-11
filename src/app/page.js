import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import ProjectCard from "@/components/ProjectCard";

// create project dummy data it should contain title, description, and id
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a project",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is a project",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a project",
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is a project",
  },
];

export default function Home() {
  return (
    <Container>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, color: "#333" }}>
          <Typography variant="h6" component="h2" gutterBottom>
            My Projects
          </Typography>
          <Typography variant="h6" component="h2" gutterBottom>
            Team Projects
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            mt: 5,
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              id={project.id}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
