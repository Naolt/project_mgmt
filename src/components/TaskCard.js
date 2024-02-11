import { Box, Typography } from "@mui/material";
import Link from "next/link";
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

const TaskCard = ({ id }) => {
  const task = tasks.find((task) => task.id == id);
  return (
    <Link href={`/${id}`} style={{ textDecoration: "none", color: "#333" }}>
      <Box
        sx={{
          width: "270px",
          height: "150px",
          p: 3,
          backgroundColor: "#ccc",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "#ddd",
          },
        }}
      >
        {/* ProjectCard */}
        <Typography variant="h6" component="h2" gutterBottom>
          {task.title}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          {task.description}
        </Typography>
      </Box>
    </Link>
  );
};

export default TaskCard;
