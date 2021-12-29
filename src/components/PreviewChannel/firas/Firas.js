import React from 'react'

import Avatar from '@mui/material/Avatar';
import './PreviewChannel.css';

import VideoSmall from './VideoSmall/VideoSmall';
import Data from './Data';


const Firas = () => {
  const donnees = Data.map(el =>  <VideoSmall el={el} key={el.id}/>)
    return (
        <div className="channel">
          <img className="channel__art" src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/263128912_600522057674848_5447643957867069231_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=EFEeFTHDw4MAX-ylJ0x&tn=wJpQ_6TGmxA9uPMz&_nc_ht=scontent.ftun10-1.fna&oh=ad4d7c6c55887c4b70b2118227e953c4&oe=61D2E2BB" alt=""/>   
          <div className="channel__details"></div>
            <div className="channel__detailsWrap">
                <div className="channel__avatarWrap">
                    <Avatar className="channel__avatar" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/263073466_853773698622704_2100108603183233050_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=_AjVG5HuikEAX_Xm2B-&_nc_oc=AQmnWEKHEbruhxS-DA0Qp2K09VOIrQMmOEV3-JBRP9ZDq0Ii6q-14wE782Bb6nAgt54&_nc_ht=scontent.ftun1-2.fna&oh=1cb6fd12bfd7a081616865db90d3acf4&oe=61D0A4CC" />

                    <div id="videothumb__channel">

                  <h1 className="videothumb__title"> Firas melki</h1>
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

export default Firas
