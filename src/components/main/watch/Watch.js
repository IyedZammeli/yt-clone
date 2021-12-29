import React, { Component } from 'react'
import intro from '../../intro/introVid.mp4';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Avatar from '@mui/material/Avatar';
import {useHistory} from 'react-router-dom'
import './Watch.css'
import VideoSmall from '../../VideoSmall/VideoSmall.js'
import Data from '../playlist/Data.js';


export default function Watch(){
  const donnees = Data.map(el =>  <VideoSmall el={el} key={el.id}/>)
        const history = useHistory();
        const handleAvatarLink = () => history.push("/Previewchannel");

        return (
            <div className="watch">
                <div className="watch__wrap">
                    <div className="watch__left">
                        <video className="watch__video" autoplay controls>
                        <source src={intro} type="video/mp4" />
                        </video>
                        <div className="watch__leftBtm" >
                            <h1  className="watch__title">intro video</h1>

                            <div className="watch__videoInfo">
                                <div className="watch__videoInfoLeft">
                                  <p className="videothumb__text">100 views 27 Mars,2021</p>
                                </div>

                                <div className="watch__videoInfoRight">

                                    <div className="watch__likeContainer">

                                        <div className="watch__likeWrap">

                                          <div className="watch__likeBtnContainer color--gray">
                                            <ThumbUpIcon className="watch__icon"/>
                                            <p>15k</p>                      
                                          </div>

                                          <div className="watch__likeBtnContainer color--gray">
                                            <ThumbDownIcon className="watch__icon"/>
                                            <p>200</p>
                                          </div>

                                        </div>

                                          <div className="watch__likeDislikes"/>
                                  </div>

                                          <div className="watch__likeBtnContainer color--gray">
                                            <ReplyIcon className="watch__icon share-icon"/>
                                            <p>Share</p>
                                          </div>

                                          <div className="watch__likeBtnContainer color--gray">
                                            <PlaylistAddIcon className="watch__icon play-addIcon" />
                                            <p>Save</p>
                                          </div>

                                          <div className="watch__likeBtnContainer color--gray">
                                            <MoreHorizIcon className="watch__icon play-addIcon" />
                                            <p>More</p>
                                           </div>

                                </div>
                               </div>
                          </div>

            <div className="watch__details">
               <div className="watch__detailsContainer">

                 <div className="video__details watch__avatarwrap">
                       <Avatar 
                       onClick={handleAvatarLink}
                       className="video__avatar"
                       alt="" 
                       src="https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/241373541_530472341579176_7473224097307026256_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=xl2KgNN8Z-IAX8W562g&tn=yFiGMndlPyFw633H&_nc_ht=scontent.ftun10-1.fna&oh=65c5dc5fc8371ad9aa9706c0f9630afd&oe=61A6B06E"
                      
                      />

                       <div className="video__channel">

                       <h1 className="video__title"> intro video </h1>

                       <p  className="video__text watch__subCount"> 4M subscribers </p>

                       </div>
                   </div>

                  <button className="watch__subBtn" color="primary" variant="contained">Subscribe</button>
                       
                                    
              </div>
              <div className="watch__description">
                <p>If you found this video helpful, make sure to leave a LIKE rating as it really helps me with the YouTube algorithm!

Part 2 ( Final) https://youtu.be/ZtmIq0lVMeI

If this video hits 50 likes we will be adding the real time watch count, subscribe, like and dislike features. This clone already has features like uploading video, viewing the video, authentication, previewing the channel.
</p>
                <p className="watch__showMore">SHOW MORE </p>               
                </div>                    
              </div> 
            </div>
            <div className="VideoSmall__container">
             {donnees}
            </div>
          </div> 
        </div>
     
                    
                    

               
        )
    
}
