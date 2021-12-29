import React, { Component } from 'react'
import './video.css'
import Avatar from '@mui/material/Avatar';
import {useHistory} from 'react-router-dom'
import Data from '../playlist/Data';
import {useState} from 'react'
import {Link} from 'react-router-dom';
export default function Vid(props) {
        const history = useHistory();
        const handleThumbLink = () => history.push(props.el.link);
        const handleAvatarLink = () => history.push(props.el.chaine);

        return (
            <div id="video_container" >
               
                <img onClick={handleThumbLink} id="video_thumbnail" src={props.el.img} />
               
                  <div id="video_details">
             
                   <Avatar 
               onClick={handleAvatarLink}
               id="video_avatar"
               alt="" 
               src={props.el.avatar}
               id="thumb"
              />
                  <div id="video_channel">

                  <h1 id="video_title">{props.el.title}</h1>

                  <div id="video_texts">

                      <p  id="video_text"> {props.el.description} </p>
                      <p id="video_text"> 500 views • 6 hours ago</p>

                  </div>

              </div>
              </div>

            </div>
        )
    }


    
    

