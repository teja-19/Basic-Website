import React from 'react';
import image3 from './pic3.jpg';
const Dashboard = () =>{
  document.body.style.backgroundImage = `url(${image3})`;
  return (

   
    <div>
      <center>
      <h3>Dashboard</h3>
      <p>Dashboard documentation is important to provide context to viewers, and 
        including key components into your documentation will help ensure the user has the necessary information to understand
        and interpret the data.</p>
      </center>
    </div>
  );
}
export default Dashboard;