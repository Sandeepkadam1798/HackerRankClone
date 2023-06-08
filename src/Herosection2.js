import { Typography ,Box,Link ,Container ,Button} from '@mui/material'
import React from 'react'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Community from "./Images/Community(2).jpg"

import Signup from "./Signup"






import community from './Images/community.jpg'

const Herosection2 = () => {
  return (
    <>


     <Box sx={{ width: "100%", marginTop: "70px", position: "relative" ,paddingTop:"5px" }}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#131414",
            fontWeight: "300",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "56px",
            fontFamily: "sans-serif",
            lineHeight: 1.3,
            fontSize: "64px",
          }}
        >
        It’s not a pipeline problem.
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{
            color: "#068932",
            fontWeight: "300",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "56px",
            fontFamily: "sans-serif",
            lineHeight: 1.3,
            fontSize: "64px",
            marginBottom:"24px"
          }}
        >
        It’s a spotlight problem.
        </Typography>
    </Box>
    <Typography sx={{fontSize:"18px",fontWeight:"300",lineHeight:"1.59",marginLeft:"auto",marginRight:"auto",textAlign:"center", color:"#576871"}}>Tech hiring needs a reset. From prepping for jobs and practicing coding to running a</Typography>
    <Typography sx={{fontSize:"18px",fontWeight:"300",lineHeight:"1.59",marginLeft:"auto",marginRight:"auto",textAlign:"center" ,color:"#576871"}}>world-class technical interview, give developers the tools they need to showcase their</Typography>
    <Typography sx={{fontSize:"18px",fontWeight:"300",lineHeight:"1.59",marginLeft:"auto",marginRight:"auto",textAlign:"center" ,color:"#576871"}}>skills, passion, and potential.</Typography>
  
  <Box sx={{ display: "flex" ,flexDirection:"row",justifyContent:"center" ,padding:"10px",justifyContent:"space-between" ,marginLeft:"400px",marginRight:"400px",marginTop:"30px"}}>

    

  <Link href="#" underline="hover" sx={{color:"#39424e",fontWeight:"600",fontFamily: "sans-serif"}}>
  {'Prep'}
</Link>
<Link href="#" underline="hover" sx={{color:"#39424e",fontWeight:"600",fontFamily: "sans-serif"}}>
  {'Screen'}
</Link>
<Link href="#" underline="hover" sx={{color:"#39424e",fontWeight:"600",fontFamily: "sans-serif"}}>
  {'Interview'}
</Link>

</Box>

{/* Another Box */}

<Box sx={{backgroundColor:"#111621" ,height: '500px',width:"auto" ,borderRadius:"8px" ,marginTop:"50px",marginRight:"50px",marginLeft:"50px"}}>

<Box sx={{marginTop:"20px"}}>
<Typography sx={{position:"absolute" , color:"#a7c9c1" ,marginTop:"40px",marginLeft:"40px"}}>:: Coding practice ::

<Typography sx={{ color:"white" ,marginTop:"40px",fontFamily:"sans-serif",margin:"32px" ,fontWeight:"800 ",fontSize:"24px"}}>Explore and expand your skills.


</Typography>

<p style={{width:"400px" ,marginLeft:"35px",color:"white"}}>Every idea has a first line of code. Prep for jobs and sharpen your skills alongside a global community of developers. Access the content you need to develop new skills – and land the job you’ve dreamed of.</p>

<Button variant="outlined" sx={{color:"white" ,borderColor: "white", '&:hover':{borderColor: "white",fontWeight:"bold"},marginLeft:"40px",marginTop:"20px"}}> Sign up and practice </Button>

</Typography>


</Box>




<Box>
  <img src={community} alt=""  style={{width: "500px" ,paddingTop:"50px",marginLeft:"700px"}}/>
</Box>

 
  
</Box>



{/* another Box 3 */}

<Box>

<Box sx={{marginTop:"20px"}}>
<Typography sx={{position:"absolute" , color:"Black" ,marginTop:"10px",marginLeft:"60px"}}>:: Coding practice ::

<Typography sx={{ color:"#068932" ,marginTop:"40px",fontFamily:"inherit",margin:"56px" ,fontWeight:"500 ",fontSize:"56px"}}>Join the movement.

<h1 style={{color:"black",fontFamily:"inherit" ,fontWeight:"500 ",fontSize:"56px"}}>Screen on skills.</h1>




</Typography>

</Typography>




</Box>
<Box sx={{paddingTop: "280px"}}>
  <img src={Community} alt=""  style={{paddingTop:"30px",marginLeft:"40px",height:"100vh",marginBottom:"50px"}}/>
</Box>

</Box>





</>

  )
}

export default Herosection2