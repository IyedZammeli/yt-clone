import React from 'react'

import Avatar from '@mui/material/Avatar';
import './PreviewChannel.css';

import VideoSmall from './VideoSmall/VideoSmall';
import Data from './Data';


const Iyed = () => {
  const donnees = Data.map(el =>  <VideoSmall el={el} key={el.id}/>)
    return (
        <div className="channel">
        <img className="channel__art" src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/263128912_600522057674848_5447643957867069231_n.png?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=EFEeFTHDw4MAX-ylJ0x&tn=wJpQ_6TGmxA9uPMz&_nc_ht=scontent.ftun10-1.fna&oh=ad4d7c6c55887c4b70b2118227e953c4&oe=61D2E2BB" alt=""/>   
          <div className="channel__details"></div>
            <div className="channel__detailsWrap">
                <div className="channel__avatarWrap">
                    <Avatar className="channel__avatar" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/264093350_667061624286768_7014612547382221283_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=_p1r1UuDR1sAX89lhrs&_nc_oc=AQkq87_8GTDyaN_cDVeVIi_hIF1ZqxKsI2Yt7h8OdSvJSOzlna1RXrivcJKYkyBWUHQ&_nc_ht=scontent.ftun1-2.fna&oh=abe31f161a89748b05cd17e36a30ff0f&oe=61D168D9" />

                    <div id="videothumb__channel">

                  <h1 className="videothumb__title">Iyed</h1>
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

export default Iyed
