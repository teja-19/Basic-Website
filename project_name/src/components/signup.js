// import React ,{useState} from 'react'
// // import Home from './Home';
// // import {Link} from 'react-router-dom';
// import Link from '@mui/material/Link';
// import axios from 'axios';
// import '../App.css';
// import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
// import { Avatar, Typography } from '@mui/material';
// const Signup =({handleChange}) =>{
//   const [data,setData]=useState( {
//     username:'',
//     email:'',
//     password:'',
//     confirmpassword:''

//   })
//   const {username,email,password,confirmpassword}=data;
//   const handler= e =>{
//     setData({...data,[e.target.name]:e.target.value})
//   }
//   const SubmitHandler= e => {
//     e.preventDefault();
//     console.log(data);
//      window.alert('sign up successfully');
//      axios.post("https://myproject-ab6d0-default-rtdb.firebaseio.com/register.json",data).then(()=>alert("Submitted Successfully"))
//   }
//   const avatarStyle={backgroundColor:'#1abc9c'}
//   return (
//     <div className='design'>
       
//       <center>
//         <Avatar  style={avatarStyle}>< HowToRegRoundedIcon/></Avatar>
//         <h1>Sign up</h1>
//         <form onSubmit={SubmitHandler}>
//         <input type="text" name="username" value={username} placeholder="username" onChange={handler} required minLength={6}/><br/>
//           <input type="email" name="email" value={email} placeholder="email" onChange={handler} required /><br/>
//           <input type="password" name="password" value={password} placeholder="password" onChange={handler} required/><br/>
//           <input type="password" name="confirmpassword" value={confirmpassword} placeholder="confirmpassword" onChange={handler} required/><br/><br/>
//           {username.length>1 && username.length<6 ? <p style={{"color":"red"}}>username must be atleast 6 characters</p> :null }
//           {(password.length>1 && confirmpassword.length>1)&&(password!==confirmpassword) ? <p style={{"color":"red"}}>passwords not matching</p> : null}
//           <input type="submit" name="Submit"/>
//           <br/>
        
//           <Typography>have an account ?
//             <Link href="#" onClick={()=>handleChange("event",0)}>
//                Signin
//             </Link>
//           </Typography>
          
        
//         </form>
        
//         </center>
       
//     </div>
    
// )
// }
// export default Signup

import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { Avatar, Typography } from '@mui/material';
const Signup = () => {
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const avatarStyle={backgroundColor:'#1abc9c'}
  return (
    <>
    <center><Avatar  style={avatarStyle}>< HowToRegRoundedIcon/></Avatar></center>
      
      <div className="p-4 box">
        <center><h2 className="mb-3">Signup</h2></center>
        
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;
 