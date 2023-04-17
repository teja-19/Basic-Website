// import React from 'react';
// import image2 from './pic1.jpg';

// import Login from './components/login';



// const Home= () =>{


  
//   document.body.style.backgroundImage = `url(${image2})`;

//   return (
//     <div className='design'>
//        <center>
//        <Login/>
//        </center>
//     </div>
//   );
// }
// export default Home;

import React,{useState,useEffect} from 'react';
import image2 from './pic1.jpg';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Homes from "./components/Homes";
import Signin from "./components/signin";
import Signup from "./components/signup";
import ProtectedRoute from "./components/Protectedroute";
import { UserAuthContextProvider } from "./context/UserAuthContext";



function Home (){
  document.body.style.backgroundImage = `url(${image2})`;
  return (
<div className='design'>
  {/* { <center>
  <Login/>
  </center> } */}
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
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
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  
</div>

    
)
}
export default Home