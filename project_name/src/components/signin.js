// import React ,{useState} from 'react'
// // import Home from './Home';
// // import {Link} from 'react-router-dom';
// import '../App.css';
// import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
// import { Avatar,Typography } from '@mui/material';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// const Signin =({handleChange}) =>{
//   const [data,setData]=useState( {
//     username:'',
//     email:'',
//     password:'',
//     // confirmpassword:''

//   })
//   const {username,email,password}=data;
//   const handler= e =>{
//     setData({...data,[e.target.name]:e.target.value})
//   }
//   const SubmitHandler= e => {
//     e.preventDefault();
//     console.log(data);
//     // window.alert('sign up successfully');
//     // axios.post("https://myproject-ab6d0-default-rtdb.firebaseio.com/register.json",data).then(()=>alert("Submitted Successfully"))
//   }
//   const avatarStyle={backgroundColor:'#1abc9c'}
//   return (
//     <div className='design'>
      
//       <center>
//         <Avatar style={avatarStyle}><LoginRoundedIcon/></Avatar>
//         <h1>Sign in</h1>
//         <form onSubmit={SubmitHandler}>
//           <input type="text" name="username" value={username} placeholder="username" onChange={handler}/><br/>
//           <input type="email" name="email" value={email} placeholder="email" onChange={handler}/><br/>
//           <input type="password" name="password" value={password} placeholder="password" onChange={handler}/><br/>
//           {/* <input type="password" name="confirmpassword" value={confirmpassword} placeholder="confirmpassword" onChange={handler}/><br/><br/> */}
//           {/* {password!== confirmpassword ? <p style={{"color":"red"}}>passwords not matching</p> : null}
//           {username<=6 ? <p style={{"color":"red"}}>username must be atleast 10 characters</p> : null} */}
//           <input name="Sign in" type="submit" value="Sign in"/>
//           <br/>
//           <FormControlLabel
//             control={
//               <Checkbox  name="jason" />
//             }
//             label="Remember me"
//           />
//           <Typography>
//             <Link href="#">
//                Forgot password ?
//             </Link>
//           </Typography>
//           <Typography>do you have an account ?
//             <Link href="#" onClick={()=>handleChange("event",1)}>
//                Signup
//             </Link>
//           </Typography>
          
        
//         </form>
        
//         </center>
       
//     </div>
    
// )
// }
// export default Signin


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { Avatar,Typography } from '@mui/material';
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/homes");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/homes");
    } catch (error) {
      console.log(error.message);
    }
  };
  const avatarStyle={backgroundColor:'#1abc9c'}
  return (
    <>
     <center><Avatar style={avatarStyle}><LoginRoundedIcon/></Avatar></center>
      <div className="p-4 box">
       <center><h2 className="mb-3">Login</h2></center>
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
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Signin;
