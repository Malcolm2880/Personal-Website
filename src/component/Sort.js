import React from 'react';
import './Sort.css';

import Werk from '../Pictures/Wekr.png'
import GUI from '../Pictures/GUI.png'
import Van from '../Pictures/Van.png'
import VASS from '../Pictures/VASS.png'
const Sort = () =>{
  return (
   <div>
     <h1>Experience</h1>
     <div class = "left">
      <div>
        <h2> Psychology Lab Assistant</h2>
        <div class = "PictureR">
    <img src={Werk} alt="Surat"></img>
    </div>
        <div class = "desc">
        <em> <h3> Werker Labs, UBC Psychology department</h3></em>
        </div>
      
        
       
         
      <h3> •	Assisted in the creation of experiments with human recognition of animal sounds.</h3>
      <h3> •	Supervised ongoing experiments.</h3>
      <h3> •	Participated in tests, as a subject for auditory emotional response.</h3>
      </div>

      </div>


      <div class = "right">
        <div>
      <h2> Teacher</h2>
      <div class = "PictureL">
    <img src={GUI} alt="Surat"></img>
    </div>

        <div class = "desc">
        <em> <h3> Under the GUI</h3></em>
        </div>
    
      <h3> •	Helped teach students basic programming skills such as Arduino.</h3>
      <h3> •	Supervised children and young teens.</h3>
      <h3>•	Created a fun and productive environment.</h3>
      </div>
      </div>
      <div class = "left">
        <div>
      <h2> Volunteer Instructor</h2>
      <div class = "PictureR  ">
    <img src={VASS} alt="Surat"></img>
    </div>
        <div class = "desc">
        <em> <h3> V.A.S.S Vancouver Adaptive Snow Sports</h3></em>
        </div>

   
      <h3> •	Instructor assisting with challenged kids in downhill skiing.</h3>
      <h3> •	Adapted to the special needs of each child.</h3>
      <h3> •	Provided emotional and physical support.</h3>
      
      </div>
      </div>
      <div class = "right">
        <div>
      <h2> Local Election Official</h2>
      <div class = "PictureL">
    <img src={Van} alt="Surat"></img>
    </div>
        <div class = "desc">
        <em> <h3> City of Vancouver Elections</h3></em>
        </div>

   
      <h3> •	14-hour shift at local voting station.</h3>
      <h3> •	Responsible for voting security and verification.</h3>
      <h3>•	Provided instructions and assistance.</h3>
      
      </div>

      </div>

        </div>

        
     
  );
}
export default Sort;