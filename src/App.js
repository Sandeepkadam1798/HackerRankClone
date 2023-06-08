import React from "react";
import Herosection from "./Herosection"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import RequestDemo from "./RequestDemo";


function App() {
  return (
    
    <BrowserRouter>
   <Routes>


   <Route path="/" element={[<Herosection/>]}/>
        <Route path="/SignUp" element={[<Signup/>]}>   

          
        </Route>
        <Route path="/requestdemo" element={[<RequestDemo/>]}>  </Route>
      </Routes>

</BrowserRouter>


    
  );
}

export default App;
