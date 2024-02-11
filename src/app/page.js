"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import ProTip from "@/components/ProTip";
import Copyright from "@/components/Copyright";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@mui/material";
import AddProject from "@/components/Project/AddProject";

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
  const [open, setOpen] = React.useState(false);
  return (
    <>
      {open && <AddProject close={() => setOpen(false)} />}
      <Container>
        <Box
          sx={{
            my: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              color: "#333",
            }}
          >
            <Box sx={{ flex: 1, gap: 2 }} display="flex">
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{ cursor: "pointer" }}
              >
                My Projects
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                gutterBottom
                sx={{ cursor: "pointer" }}
              >
                Team Projects
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOpen(true)}
              size="small"
            >
              Add Project
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              mt: 5,
              p: 1,
              borderRadius: "8px",
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
    </>
  );
}
