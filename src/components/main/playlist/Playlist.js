import React, { Component } from 'react'
import Vid from '../video/Video.js';
import './playlist.css'
import Data from './Data.js';

export default class Playlist extends Component {
    render() {
        const donnees = Data.map(el => <Vid el={el} key={el.id}/>)
        return (
            <div className="playlist">
               
               {donnees}

               
            </div>
        )
    }
}
