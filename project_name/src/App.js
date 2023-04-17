import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "./Home";
import Dashboard from "./Dashboard";
import About from "./About";
import Contact from "./Contact";
import logo from './pic5.png'; 
// import React,{useState,useEffect} from 'react';
// import image2 from './pic1.jpg';
// import { Container, Row, Col } from "react-bootstrap";
// import Homes from "./components/Homes";
// import Signin from "./components/signin";
 import Signup from "./components/signup";
// import ProtectedRoute from "./components/Protectedroute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
// import Home from './Home';
import Homes from "./components/Homes";
import Signin from "./components/signin";
import ProtectedRoute from "./components/Protectedroute";



function App() {
  // document.body.style.backgroundImage = `url(${image2})`;
  
  return(
    <div>
    <BrowserRouter>
      <Navbar/>
        <img src={logo} alt="Logo" height={80} width={100} position={'absolute'} className="img" />

      
      <Routes>
      <Route path='/home' exact element={<Home/>}/>
        <Route path='/About' exact element={<About/>} />
        <Route path='/Dashboard' exact element={<Dashboard/>} />
        <Route path='/Contact' exact element={<Contact/>} />
        {/* <UserAuthContextProvider>
        <Route
                path="/homes"
                element={
                  <ProtectedRoute>
                    <Homes />
                  </ProtectedRoute>
                }
              />
               <Route path="/" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
          </UserAuthContextProvider> */}
      </Routes>
    </BrowserRouter>
    {/* <Footer/> */}
  
   </div>
   
       
  
  
    
    
    
  );
}

export default App;