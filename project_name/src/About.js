import React from 'react';
import image1 from './pic2.jpg';
const About = () =>{

 document.body.style.backgroundImage = `url(${image1})`;

  return (
    <div>
      <center>
            <h1>ABOUT US</h1>
            <p>
            Technology, innovation and problem solving – that’s where we play. 
            We specialize in digital enablement, software product development and data technology. 
            We are a trusted technology partner to over 250 clients globally, 
            serving them from 26 offices worldwide using our OneCompany® model of engagement.
            </p>


      </center>
    </div>
  )
}
export default About;