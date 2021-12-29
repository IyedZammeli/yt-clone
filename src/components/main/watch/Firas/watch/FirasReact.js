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
import o from '../Reactf.m4v';


export default function FirasReact(){
  const donnees = Data.map(el =>  <VideoSmall el={el} key={el.id}/>)
        const history = useHistory();
        const handleAvatarLink = () => history.push("/firas");

        return (
            <div className="watch">
                <div className="watch__wrap">
                    <div className="watch__left">
                        <video className="watch__video" autoplay controls>
                        <source src={o} type="video/mp4" />
                        </video>
                        <div className="watch__leftBtm" >
                            <h1  className="watch__title">how to build your own website using react</h1>

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
                       src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/263073466_853773698622704_2100108603183233050_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=_AjVG5HuikEAX_Xm2B-&_nc_oc=AQmnWEKHEbruhxS-DA0Qp2K09VOIrQMmOEV3-JBRP9ZDq0Ii6q-14wE782Bb6nAgt54&_nc_ht=scontent.ftun1-2.fna&oh=1cb6fd12bfd7a081616865db90d3acf4&oe=61D0A4CC"                       
                      />

                       <div className="video__channel">

                       <h1 className="video__title"> firas </h1>

                       <p  className="video__text watch__subCount"> melki </p>

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
