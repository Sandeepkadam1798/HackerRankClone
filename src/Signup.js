import React from "react";
import logo from "./Images/HackerRankLogo.png";
import {Link } from "react-router-dom";



import { Box, Typography, Button } from "@mui/material";


const Signup = () => {


  return (
    <>
      {/* ....for sign page */}
      <Box sx={{ marginTop: "40px" }}>
        <Link to="/"><img
          src={logo}
          alt=""
          style={{ width: "50px", height: "50px", marginLeft: "40px" }}
        />
        </Link>
      </Box>

      <Box sx={{ marginLeft: "40px", marginTop: "40px" }}>
        <Typography sx={{ fontSize: "40px", fontWeight: "900" }}>
          How do you want to
        </Typography>
        <Typography sx={{ fontSize: "40px", fontWeight: "900" }}>
          use HackerRank?
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "300" }}>
          We’ll personalize your setup experience accordingly.
        </Typography>
      </Box>

      <Box  sx={{display:"flex",flexDirection:"column"}}>
        <Button
          variant="outlined"
          sx={{
            width: "500px",
            backgroundColor: "#FBFBFB",
            padding: "24px 24px 24px 96px",
            marginLeft: "40px",
            marginTop: "20px",
            borderColor: "gray",
            '&:hover':{borderColor: "black"}
          }}
        >
          <Link
            href="#"
            underline="hover"
            sx={{
              color: "black",
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            {<><b>I’m here to hire tech talent</b><p style={{color:"gray"}}>Evaluate tech skills at scale</p></>}
          </Link>
        </Button>
        
        <Button
          variant="outlined"
          sx={{
            width: "500px",
            backgroundColor: "#FBFBFB",
            padding: "24px 24px 24px 96px",
            marginLeft: "40px",
            marginTop: "20px",
            borderColor: "gray",
            '&:hover':{borderColor: "black"}
          }}
        >
          <Link
            href="#"
            underline="hover"
            sx={{
              color: "black",
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            {<><b>I’m here to practice and prepare</b><p style={{color:"gray"}}> Solve problems and learn new skills</p></>}
          </Link>
        </Button>

        <Button
        variant="contained"
        size="larger"
        sx={{
          backgroundColor: "#068932",
          "&:hover": { backgroundColor: "#068932" },
          fontSize:"14px",cursor: "pointer",lineHeight: "30px",width:"150px",borderRadius:"4px",marginTop:"30px",marginLeft:"40px",marginBottom:"40px",height:"35px",width:"200px"
        }}
      >
        Create account
      </Button>
        

      </Box>

     
    </>
  );
};

export default Signup;
