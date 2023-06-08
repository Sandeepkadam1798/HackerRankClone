import React from "react";

import { Box, Typography, Button } from "@mui/material";

const Topbar = () => {
  return (
    <>
      <Box
        sx={{
          position: "static",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "40px",
          backgroundColor: " #050C1B ",
          paddingLeft: "1100px",
        }}
      >
        <Button
          variant="text"
          sx={{ padding: "10px", fontSize: "14px", color: "#B7C9CC" }}
        >
          Contact Us
        </Button>
        <Typography variant="3" color={"#B7C9CC"}>
          |
        </Typography>
        <Button
          variant="text"
          sx={{ padding: "10px", fontSize: "14px", color: "#B7C9CC" }}
        >
          Login
        </Button>
      </Box>
    </>
  );
};
export default Topbar;
