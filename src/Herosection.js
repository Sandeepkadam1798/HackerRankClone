import React from "react";
import Topbar from "./Topbar";
import { Box, Typography, Button ,CardActions,Paper} from "@mui/material";

import img1 from "./Images/peloton_black(1).png"
import img2 from "./Images/atlassian_black(2).png"
import img3 from "./Images/bloomberg_black(3).png"
import img4 from "./Images/vmware_black(4).png"
import img5 from "./Images/stripe_black(5).png"
import img6 from "./Images/goldmansachs_black(6).png"
import img7 from "./Images/adobe_black(7).png"
import img8 from "./Images/linkedin_black(8).png"
import Navbar from "./Navbar";
import Herosection2 from "./Herosection2"
import { Link } from "react-router-dom";
import Signup from "./Signup";

const Herosection = () => {
  return (
    <>

   
    <div class="shadow-none p-3 mb-5 bg-body-tertiary rounded">
    <Topbar/>
    <Navbar/>
      <Box sx={{ width: "100%", marginTop: "100px", position: "relative" }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#1F1F20",
            fontWeight: "900",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "100px",
            fontFamily: "sans-serif",
            lineHeight: 1.2,
            fontSize: "64px",
          }}
        >
          Skills speak louder
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#1F1F20",
            fontWeight: "900",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "100px",
            fontFamily: "sans-serif",
            lineHeight: 1.2,
            fontSize: "64px",
          }}
        >
          than words
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          width: "100%",
          paddingTop: "30px",
          marginLeft: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            color: "#576871",
            lineHeight: "1.5",
            fontWeight: "300",
          }}
        >
          We help companies develop the strongest tech teams around. We help
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          width: "100%",
          marginLeft: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            color: "#576871",
            lineHeight: "1.5",
            fontWeight: "300",
          }}
        >
          candidates sharpen their tech skills and pursue job opportunities.
        </Typography>
      </Box>

      <CardActions sx={{display:"flex",flexDirection:"row",justifyContent:"center",paddingTop:"30px"}}>

      <Button
        variant="contained"
        size="larger"
        sx={{
          backgroundColor: "#068932",
          "&:hover": { backgroundColor: "#068932" },
          fontSize:"14px",cursor: "pointer",lineHeight: "30px",width:"150px",borderRadius:"4px"
        }}
        >
    {/* //   ><Link style={{color:"white",textDecoration:"none"}} >    
    
    //   Signup
    // </Link> */}

    <Link to="/SignUp" style={{color:"white",textDecoration:"none"}}>
    Sign up
    </Link>
        
      </Button>
      <Button
        variant="outlined"
        size="larger"
        sx={{ color: "#39424E", borderColor: "#000000",fontSize:"14px",cursor: "pointer",lineHeight: "30px",fontWeight:"600",borderRadius:"4px"} }
      >
        Request demo
      </Button>
      </CardActions>
      <Box sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          width: "100%",
          marginLeft: "10px",
        }}>
        <Typography sx={{
            fontSize: "18px",
            color: "#576871",
            lineHeight: "1.5",
            fontWeight: "300",paddingTop:"40px"
          }}>
        Over 40% of developers worldwide and 3,000 companies use HackerRank
        </Typography>
      </Box>



      {/* <Paper elevation={0} sx={{display:"flex", alignItems:"center",justifyContent:"center",paddingTop:"20px"}}> */}
      <Box display="flex" sx={{justifyContent:"center",marginTop:"10px"}}> 
          <img
            src={img1}
            alt=""
            style={{ height: "60px", width: "100px" }}
          />
          <img
            src={img2}
            alt=""
            style={{ height: "60px", width: "100px" }}
          />
          <img
            src={img3}
            alt=""
            style={{ height: "60px", width: "100px" }}
          />
          <img
            src={img4}
            alt=""
            style={{ height: "60px", width: "100px" }}
          />
          <img
            src={img5}
            alt=""
            style={{ height: "60px", width: "100px" }}
          />
          <img
            src={img6}
            alt=""
            style={{ height: "60px", width: "100px" }}
          />
          <img
            src={img7}
            alt=""
            style={{ height: "60px", width: "100px" }}
          />
          <img
            src={img8}
            alt=""
            style={{ height: "60px", width: "100px" }}
          />
          </Box>
        {/* </Paper> */}
        </div>
        <Herosection2/>



    </>
  );
};

export default Herosection;
