"use client";
import Members from "@/components/Project/Members";
import AddTask from "@/components/Task/AddTask";
import TaskCard from "@/components/TaskCard";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
const tasks = [
  {
    id: "1",
    title: "Task 1",
    description: "This is a task",
    due_date: "2022-12-31",
    status: "backlog",
  },
  {
    id: "2",
    title: "Task 2",
    description: "This is a task",
    due_date: "2022-12-31",
    status: "in-progress",
  },
  {
    id: "3",
    title: "Task 3",
    description: "This is a task",
    due_date: "2022-12-31",
    status: "done",
  },
  {
    id: "4",
    title: "Task 4",
    description: "This is a task",
    due_date: "2022-12-31",
    status: "archived",
  },
];

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
const page = ({ params }) => {
  const [open, setOpen] = React.useState(false);
  const [openMembers, setOpenMembers] = React.useState(false);
  const project = projects.find((project) => project.id == params.id);
  return (
    <Box sx={{ py: 4 }}>
      {open && <AddTask close={() => setOpen(false)} />}
      {openMembers && <Members close={() => setOpenMembers(false)} />}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {project.title}
        </Typography>
        <Button
          variant="contained"
          size="small"
          onClick={() => setOpenMembers(true)}
        >
          Members
        </Button>
      </Box>
      {/*<Typography variant="h" component="h2" gutterBottom>*/}
      {/*{project.description}*/}
      {/*</Typography>*/}
      <Box sx={{ display: "flex", gap: 2, my: 4 }}>
        <Box>
          {/* Backlog */}
          <Typography variant="h6" component="h2" gutterBottom color={"#444"}>
            Backlog
          </Typography>
          <Box>
            {tasks
              .filter((task) => task.status === "backlog")
              .map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  id={task.id}
                />
              ))}
          </Box>
        </Box>
        <Box>
          {/* Backlog */}
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            color={"#999900"}
          >
            In-Progress
          </Typography>
          <Box>
            {tasks
              .filter((task) => task.status === "in-progress")
              .map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  id={task.id}
                />
              ))}
          </Box>
        </Box>
        <Box>
          {/* Backlog */}
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            color={"#006600"}
          >
            Done
          </Typography>
          <Box>
            {tasks
              .filter((task) => task.status === "done")
              .map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  id={task.id}
                />
              ))}
          </Box>
        </Box>
        <Box>
          {/* Backlog */}
          <Typography
            variant="h6"
            component="h2"
            gutterBottom
            color={"#880000"}
          >
            Archived
          </Typography>
          <Box>
            {tasks
              .filter((task) => task.status === "archived")
              .map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  id={task.id}
                />
              ))}
          </Box>
          <Box
            onClick={() => setOpen(true)}
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#eee",
              borderRadius: "8px",
              mt: 2,
              py: 1,
              justifyContent: "flex-start",
              pl: 2,
              cursor: "pointer",
            }}
          >
            <Typography
              variant="p"
              component="p"
              gutterBottom
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AddIcon /> New
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;
