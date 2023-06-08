import React from 'react'
import headerlogo from './Images/headerlogoimage.png'
import { Box, Typography, Button ,CardActions,Paper,} from "@mui/material";
import {Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
    <div class="shadow p-3 mb-5 bg-body-tertiary rounded">
    <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{paddingTop:"0px" , backgroundColor:"#ffffff"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={headerlogo} alt="" style={{width: "100%",height:"20px"}}/></a>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" style={{paddingTop:"10px" }}>
        <a class="nav-link"  href="#" style={{fontWeight:"bold" ,fontFamily:"inherit"}}>Products</a>
        <a class="nav-link" href="#" style={{fontWeight:"bold" ,fontFamily:"inherit"}} >Solutions</a>
        <a class="nav-link" href="#" style={{fontWeight:"bold" ,fontFamily:"inherit"}}>Resources</a>
        <a class="nav-link " style={{fontWeight:"bold" ,fontFamily:"inherit"}}>Pricing</a>
        
        <Box sx={{display:"flex",paddingLeft:"300px"}}>
        <a class="nav-link " style={{fontWeight:"bold" ,fontFamily:"inherit"}} >For candidates</a>
        <Typography variant='5' style={{fontWeight:"bolder",paddingTop:"7px"}}>|</Typography>
        <Button
        variant="text"
        size="larger"
        sx={{
            color:"grey",
          backgroundColor: "#f7f7f7",
          "&:hover": { backgroundColor: "#484949" },
          fontSize:"14px",cursor: "pointer",lineHeight: "30px",borderRadius:"1px"
        ,paddingRight:"15px",color:"grey","&:hover": { color: "black" }}}
      >
        <Link to="/requestdemo" style={{color:"Black",textDecoration:"none"}}>
      Request demo
      </Link>

      </Button>

        <Button
        variant="contained"
        size="larger"
        sx={{
          backgroundColor: "#068932",
          "&:hover": { backgroundColor: "#068932" },
          fontSize:"14px",cursor: "pointer",lineHeight: "30px",width:"150px",borderRadius:"4px",paddingLeft:"20px"
        }}
      ><Link to="/SignUp" style={{color:"white",textDecoration:"none"}}>
      Sign up
      </Link>
        
      </Button>
        </Box>
      </div>
    </div>
  </div>
</nav>
</div>
</>
  )
}

export default Navbar