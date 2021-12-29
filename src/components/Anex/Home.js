import React from 'react';
import './home.css' ;
import WelcomeTo from"./welcomeTo.js";
import i21 from"./i.svg";
import m1 from"./m.svg";
import o1 from"./o.svg";
import f1 from"./f.svg";
import i11 from"./i.svg";
import image3 from"./image3.png";

import {Link} from 'react-router-dom';

import {useHistory} from 'react-router-dom'

export default function Home()  {
  const history = useHistory();
  const handleThumbLink = () => history.push("/marah");
   
 
    return (
      
      <div id="landing-page">
        <div className="landing-pagescreen">
          <div className="overlap-group2">
            <img className="ground-crack-1"  />
            <h1 className="title">
              <WelcomeTo/>
            </h1>
            <div className="container">
        
            <img className="m-1" src={m1}onClick={handleThumbLink} />
            <Link to="/oussama">   <img className="o-1" src={o1} /></Link>
           
            <Link to="/firas">  <img className="f-1" src={f1} />  </Link>
         
           <Link to="/iyed"> <img className="i1-1" src={i11} /> </Link>
           
           <Link to="/ilyes">   <img className="i2-1" src={i21} /> </Link>
         
  
            </div>
            
            <img className="image-3" src={image3} />
            <div className="overlap-group1poppins-semi-bold-white-36px">
              <div className="about-us">
               
              </div>
              <div className="contact-us">
              
              </div>
             
             
              </div>
            
            </div>
          </div>
        </div>
      
    );
  }




