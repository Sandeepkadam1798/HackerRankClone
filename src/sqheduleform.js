
import React, { useState } from 'react';
import { Typography ,Box} from '@mui/material'



const MyForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Form data:', formData);
  };

  return (

    
    <>
    
    <Box sx={{marginLeft:"700px"}} >
    <Typography variant='h6'>Schedule a demo</Typography>
    <Typography variant='subtilte1' sx={{marginRight:"100px"}}>Please fill out the form below, and we’ll contact you shortly.</Typography>
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",width:"300px"}}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
    </Box>
   
    </>
  );
};

export default MyForm;

{/* <Typography variant='h1' sx={{fontSize:"48px",fontFamily:"sans-serif",lineHeight:"1.6",marginLeft:"100px",marginTop:"100px"}}> See HackerRank in action.
</Typography> */}
