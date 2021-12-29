import React, { Component } from 'react'
import "./VideoSmall.css"
import {useHistory} from "react-router-dom"


const VideoSmall = (props) => {

   const history = useHistory()
   const handleclickRedirect = () =>{history.push(props.el.link)
   }

  
        return (
            <div  onClick={handleclickRedirect} className= "videoSmall__channelView">
               <div className="videoSmall__left">
                <img 
                src={props.el.img}
                alt={"thumbnail"} 
                className="VideoSmall__channelView__img" />

               </div>

               <div className="videoSmall__right">
                   <p className="videoSmall__title">{props.el.title}</p>
                <div className="videoSmall__texts videothumb__texts">
                    {(
                    <p className="videothumb__text">{props.el.description}</p>)}
                    <p className="videothumb__text">105k views • 3 days ago </p>

                </div>  

               </div>
            </div>
        )
        }
export default VideoSmall