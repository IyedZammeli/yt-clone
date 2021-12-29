import React, { Component } from 'react'
import intro2 from './vid1.mp4'
import {Link} from 'react-router-dom';
import './Intro.css'

export default class Intro extends Component {
    render() {
        return (
            <div className="intro1">
            <div className="intro">
                <video
    autoPlay muted
    style={{
     position:"absolute", 
     width:"100%",
     left:"50%",
     top:"50%",
     height:"100%",
     objectFit:"cover",
     transform:"translate(-50%,-50%)",
     zIndex:"-1",
     
          }}
          className="vid"
   >
<source src={intro2} type="video/mp4" />

</video>
<Link to="/Home"><button className="btn">Entrer</button></Link>

            </div>
            </div>
        );
    }
}
