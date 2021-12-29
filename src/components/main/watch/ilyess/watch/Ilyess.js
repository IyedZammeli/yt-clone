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
import o from '../Ilyess-1.m4v';


export default function Ilyess(){
  const donnees = Data.map(el =>  <VideoSmall el={el} key={el.id}/>)
        const history = useHistory();
        const handleAvatarLink = () => history.push("/ilyes");

        return (
            <div className="watch">
                <div className="watch__wrap">
                    <div className="watch__left">
                        <video className="watch__video" autoplay controls>
                        <source src={o} type="video/mp4" />
                        </video>
                        <div className="watch__leftBtm" >
                            <h1  className="watch__title">Projet C : repertoire d'employer</h1>

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
                       src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/263612153_449252463445944_7594961914525054500_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=NMWzwXl3cu0AX9j6KBZ&_nc_ht=scontent.fnbe1-2.fna&oh=253219ddb607c01a7fddce77d9421f4f&oe=61D1292F"
                      
                      />

                       <div className="video__channel">

                       <h1 className="video__title"> Ilyess </h1>

                       <p  className="video__text watch__subCount"> 4M subscribers </p>

                       </div>
                   </div>

                  <button className="watch__subBtn" color="primary" variant="contained">Subscribe</button>
                       
                                    
              </div>
              <div className="watch__description">
                <p>If you found this video helpful, make sure to leave a LIKE rating as it really helps me with the YouTube algorithm!


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
