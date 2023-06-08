import React from "react";
import logo from "./Images/HackerRankLogo.png";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Community from "./Images/Community(2).jpg";

import MyForm from "./sqheduleform";

const RequestDemo = () => {
  return (
    <>
      <Box sx={{ marginTop: "40px" }}>
        <Link to="/">
          <img
            src={logo}
            alt=""
            style={{ width: "50px", height: "50px", marginLeft: "100px" }}
          />
        </Link>
      </Box>

      <Box
        sx={{
          height: "500px",
          width: "auto",
          borderRadius: "8px",
          marginTop: "50px",
          marginRight: "50px",
          marginLeft: "50px",
        }}
      >
        <Box sx={{ marginTop: "20px" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "48px",
              fontFamily: "sans-serif",
              lineHeight: "1.6",
              marginLeft: "100px",
              marginTop: "100px",
            }}
          >
            {" "}
            See HackerRank in action.
            <p></p>
          </Typography>
        </Box>

        

        <Box>
          <MyForm
            style={{ width: "500px", paddingTop: "50px", marginLeft: "700px" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default RequestDemo;
