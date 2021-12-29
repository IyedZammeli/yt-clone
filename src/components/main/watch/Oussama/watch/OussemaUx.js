import React, { Component } from 'react'

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ReplyIcon from '@mui/icons-material/Reply';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Avatar from '@mui/material/Avatar';
import {useHistory} from 'react-router-dom'
import './Watch.css'
import VideoSmall from '../../../../VideoSmall/VideoSmall.js'
import Data from '../../../playlist/Data.js';
import o from '../Oussamamofi-1.m4v';


export default function OussemaUx(){
  const donnees = Data.map(el =>  <VideoSmall el={el} key={el.id}/>)
        const history = useHistory();
        const handleAvatarLink = () => history.push("/Oussama");

        return (
            <div className="watch">
                <div className="watch__wrap">
                    <div className="watch__left">
                        <video className="watch__video" autoplay controls>
                        <source src={o} type="video/mp4" />
                        </video>
                        <div className="watch__leftBtm" >
                            <h1  className="watch__title">About My Work</h1>

                            <div className="watch__videoInfo">
                                <div className="watch__videoInfoLeft">
                                  <p className="videothumb__text">100 views 04 December,2021</p>
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
                       src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/263344711_278904284210720_5718846364921320132_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=bK9w8QFwVmAAX9DgxDN&_nc_ht=scontent.ftun1-2.fna&oh=5953720cd0448f242588b8ccb5c395c1&oe=61D0E2CE"
                      
                      />

                       <div className="video__channel">

                       <h1 className="video__title"> Oussama </h1>

                       <p  className="video__text watch__subCount"> MrjinzoShenYou </p>

                       </div>
                   </div>

                  <button className="watch__subBtn" color="primary" variant="contained">Subscribe</button>
                       
                                    
              </div>
              <div className="watch__description">
                <p> here m presenting some of my work with different companies and associations using AE/AI/PS/ filmora10  
                  
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
