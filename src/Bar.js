import React from 'react';
import "./Navbar.css"
import Face from './Pictures/Face.png';
import {  Link, useNavigate } from "react-router-dom";





const Navbar= () =>{
  const navigate = useNavigate();
  return (
		<header class="header">
		<div class = "Picture">
    <img src={Face} alt="Face"></img>
</div>
<div class = "Contact">
<h3>
Vancouver, BC </h3>
<h3>

604-652-4284
</h3>
<h3>
malcolmteesd@Gmail.com (Preferred)
</h3>
<h3>

https://github.com/Malcolm2880
</h3>

</div>

  <div class="mid">
    
		<ul class="navbar">
		
   


  <div class="About">
  
     
      
  <button onClick={() => navigate("/")}>About</button>
      </div>
   
   
      <div class="Projects">
      <button onClick={() => navigate("/Projects")}>Projects</button>
      </div>
   

   

      <div class="Sort">
      <button onClick={() => navigate("/Sort")}>Experience</button>
      </div>
      <div class = "Gone"><text>Gone</text></div>
    </ul>

 
    </div>
    
    </header>
  );
}




export default Navbar;