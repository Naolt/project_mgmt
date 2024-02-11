"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log("User changed", JSON.stringify(user));
    if (!user.email) {
      router.push("/signin");
    }
  }, [user]);
  return <Box>{children}</Box>;
};

export default AuthProvider;
