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
import o from '../Marah-1.m4v';


export default function ClubRobotique(){
  const donnees = Data.map(el =>  <VideoSmall el={el} key={el.id}/>)
        const history = useHistory();
        const handleAvatarLink = () => history.push("/Marah");

        return (
            <div className="watch">
                <div className="watch__wrap">
                    <div className="watch__left">
                        <video className="watch__video" autoplay controls>
                        <source src={o} type="video/mp4" />
                        </video>
                        <div className="watch__leftBtm" >
                            <h1  className="watch__title">ClubRobotique</h1>

                            <div className="watch__videoInfo">
                                <div className="watch__videoInfoLeft">
                                  <p className="videothumb__text">100 views 02 Décembre,2021</p>
                                </div>

                                <div className="watch__videoInfoRight">

                                    <div className="watch__likeContainer">

                                        <div className="watch__likeWrap">

                                          <div className="watch__likeBtnContainer color--gray">
                                            <ThumbUpIcon className="watch__icon"/>
                                            <p>2M</p>                      
                                          </div>

                                          <div className="watch__likeBtnContainer color--gray">
                                            <ThumbDownIcon className="watch__icon"/>
                                            <p>0</p>
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
                       src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/263406912_441483750715182_6935125263922961862_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=q98wNlNk0j0AX-qf9Jm&_nc_ht=scontent.ftun1-2.fna&oh=0a77cf1f490ce6650562fe00868b09ef&oe=61D0FD4E"
                      
                      />

                       <div className="video__channel">

                       <h1 className="video__title"> Marah Baccari</h1>

                       <p  className="video__text watch__subCount"> 4M subscribers </p>

                       </div>
                   </div>

                  <button className="watch__subBtn" color="primary" variant="contained">Subscribe</button>
                       
                                    
              </div>
              <div className="watch__description">
                <p>Dans le cadre de notre seconde année en Licence Informatique De Gestion à l’ESSECT, il nous est proposé un projet qui nous permet de mettre en pratique nos connaissances et nos compétences professionnelles au travers d’un cahier des charges ayant pour finalité le développement d’un site robotique dynamique pour enfants.</p>
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