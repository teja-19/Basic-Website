import React from 'react';
import image4 from './pic4.jpg';
const Contact = () =>{
  document.body.style.backgroundImage = `url(${image4})`
  return (
    <div>
      <center>
          <h2>Contact</h2>
          <p>
            Email: jajsolutions@gmail.com<br/>
            phone:040-5674989<br/>
            Address:CyberTowers,Hitech City 500086.
          </p>
      </center>
    </div>
  );
    }
export default Contact;