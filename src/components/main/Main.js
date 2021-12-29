import React, { Component } from 'react'
import Vid from './video/Video.js';
import './video/video.css'
import './Main.css'
import Playlist from './playlist/Playlist.js';


export default class Main extends Component {
    render() {
        return (
     <div className="main">

<Playlist />
{/*<img className="o-1" src={o1} />
  <img className="f-1" src={f1} />
  <img className="i1-1" src={i11} />
        <img className="i2-1" src={i21} />*/}

    </div>
        )
    }
}
