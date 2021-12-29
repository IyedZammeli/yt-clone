import React from 'react'

import Avatar from '@mui/material/Avatar';
import './PreviewChannel.css';

import VideoSmall from './VideoSmall/VideoSmall';
import Data from './Data';


const Oussema = () => {
  const donnees = Data.map(el =>  <VideoSmall el={el} key={el.id}/>)
    return (
        <div className="channel">
        <img className="channel__art" src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/263128912_600522057674848_5447643957867069231_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=EFEeFTHDw4MAX-ylJ0x&tn=wJpQ_6TGmxA9uPMz&_nc_ht=scontent.ftun10-1.fna&oh=ad4d7c6c55887c4b70b2118227e953c4&oe=61D2E2BB" alt=""/>   
          <div className="channel__details"></div>
            <div className="channel__detailsWrap">
                <div className="channel__avatarWrap">
                    <Avatar className="channel__avatar" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/263344711_278904284210720_5718846364921320132_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=bK9w8QFwVmAAX9DgxDN&_nc_ht=scontent.ftun1-2.fna&oh=5953720cd0448f242588b8ccb5c395c1&oe=61D0E2CE" />

                    <div id="videothumb__channel">

                  <h1 className="videothumb__title"> Oussama khedimi</h1>
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

export default Oussema
