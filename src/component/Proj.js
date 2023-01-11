import React from 'react';
import './Sort.css';

import Boxagon from '../Pictures/Boxagon.png'
import F1 from '../Pictures/Formula.jpg'
import Ploy from '../Pictures/Ploy.png'
const Proj = () =>{
  return (
    <div>
 
      <h1>School  Projects</h1>
      <div class = "left">
        
        <h2> "Super Boxagon" game</h2>
        
        <div>
       
      
      <h3> •	Created a minor game with Java Swing UI implementation.</h3>
      <h3> •	Back end written in Java</h3>
      <h3>•	Test-driven development using JUnit.</h3>
      <h3> •	Managed data logging and persistence using JSON.</h3>
    <h3>  •	Technologies: Java, JSON, Java Swing, JUnit.</h3>
    
    </div>
    

      </div>
      
      
      <div class = "right">
      <h2> Formula F1 Database</h2>

      <div>
       
      <h3> •	Worked with a team of 3 members to create and query Formula 1 data.</h3>
      <h3> •	Allowed for live updates and database alteration using SQL.</h3>
      <h3>•	UI created using Java Swing.</h3>
      <h3> •	Implemented Back end with Java.</h3>
    <h3>  •	Technologies: SQL, Java, Java Swing.</h3>

</div>
      </div>
      <h1>Personal Projects</h1>

      <div class = "left">
      <h2> Python Card Manager</h2>
      <div>
        <div class = "PictureR2">
    </div>

      <h3> •	Created a iteractive card manager based on a game</h3>
      <h3> •	Calculates maximum possible damage and defence that can be generated in a turn</h3>
      <h3> •	UI was created through Tkinter</h3>
      <h3> •	Technologies: Python, Tkinter.</h3>
     
      </div>
      </div>



      </div>
  
  );
}
export default Proj;