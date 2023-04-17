// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//    <Router>
//       <Home />
//     </Router>
//   </React.StrictMode>
// );





import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Home from './Home';

ReactDOM.render(
  <React.StrictMode>
  <App/>
     <React.Fragment>
       <Router>
      <Home/>
    </Router> 
    </React.Fragment> 
    
  </React.StrictMode>,
  
  document.getElementById("root")
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//        <Home />
//     </Router>
//     </React.StrictMode>,
//   document.getElementById("root2")
// );