import React from 'react'
import rise2 from './rise2.png';
import Avatar from '@mui/material/Avatar';
import './PreviewChannel.css';
import Vid from '../main/video/Video.js';
import VideoSmall from './VideoSmall/VideoSmall';
import Data from './Data';


const PreviewChannel = () => {
  const donnees = Data.map(el =>  <VideoSmall el={el} key={el.id}/>)
    return (
        <div className="channel">
          <img className="channel__art" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/s2048x2048/262993338_2698442297118587_1098423606302891979_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=zzOIo1FaHPEAX9q2jQ9&_nc_ht=scontent.ftun1-2.fna&oh=bd192e8c4c8d5f049243bc55f70af1d9&oe=61D0A5B6" alt=""/>  
          <div className="channel__details"></div>
            <div className="channel__detailsWrap">
                <div className="channel__avatarWrap">
                    <Avatar className="channel__avatar" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/263073466_853773698622704_2100108603183233050_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=_AjVG5HuikEAX_Xm2B-&_nc_oc=AQmnWEKHEbruhxS-DA0Qp2K09VOIrQMmOEV3-JBRP9ZDq0Ii6q-14wE782Bb6nAgt54&_nc_ht=scontent.ftun1-2.fna&oh=1cb6fd12bfd7a081616865db90d3acf4&oe=61D0A4CC" />

                    <div id="videothumb__channel">

                  <h1 className="videothumb__title">firas</h1>
                  <p  className="videothumb__text watchsubCount"> 5M Subscribers</p>
            
                  
              </div>
        
                </div>
                <button className="watch__subBtn channel__subBtn" color="primary" variant="contained">
                    Subscribe 
                  </button>
            </div>
            <div className="channel__links">

                      <div className="channel__link ">
                         <p>HOME</p> 
                      </div>

                      <div className="channel__link channel__link--active">
                         <p>VIDEOS</p> 
                      </div>

                      <div className="channel__link">
                         <p>ABOUT</p> 
                      </div>

                     
                     
                  </div>
                  
                  <div className="channel__contentWrapper">
                 {donnees}
                  

                  </div>

                 
        </div>
    )
}

export default PreviewChannel
