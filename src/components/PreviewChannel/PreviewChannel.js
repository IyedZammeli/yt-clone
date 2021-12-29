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
          <img className="channel__art" src="https://www.wallpapertip.com/wmimgs/0-1256_cool-nature-image-4k-wallpaper-nature.jpg" alt=""/>  
          <div className="channel__details"></div>
            <div className="channel__detailsWrap">
                <div className="channel__avatarWrap">
                    <Avatar className="channel__avatar" />

                    <div id="videothumb__channel">

                  <h1 className="videothumb__title"> na7nou a sanafeirou sighaar </h1>
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
