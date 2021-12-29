import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar';
import './Sidebar.css'
import {Link} from 'react-router-dom';
import {useHistory} from "react-router-dom"
 

      const Menu = ({changeWidth}) => {
        const history = useHistory()
        const handleclick = () =>{history.push('/')
        }
      
        return (
      <div className={'sidebar ${changeWidth && "sidebar__extraWidth}'}>
        <div>
      
       <Link to="/firas">
       <Avatar alt="firas" src= "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/263073466_853773698622704_2100108603183233050_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=_AjVG5HuikEAX_Xm2B-&_nc_oc=AQmnWEKHEbruhxS-DA0Qp2K09VOIrQMmOEV3-JBRP9ZDq0Ii6q-14wE782Bb6nAgt54&_nc_ht=scontent.ftun1-2.fna&oh=1cb6fd12bfd7a081616865db90d3acf4&oe=61D0A4CC"
       sx={{ width: 40, height: 40 }} className="avatar"/>
        </Link>
       </div>
       
       <div>
       <Link to="/marah"> 
       <Avatar alt="marah" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/263406912_441483750715182_6935125263922961862_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=q98wNlNk0j0AX-qf9Jm&_nc_ht=scontent.ftun1-2.fna&oh=0a77cf1f490ce6650562fe00868b09ef&oe=61D0FD4E"
       sx={{ width: 40, height: 40 }} className="avatar"/>
       </Link>
        
       </div>

       <div>
       <Link to="/oussama">
       <Avatar alt="oussema" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/263344711_278904284210720_5718846364921320132_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=bK9w8QFwVmAAX9DgxDN&_nc_ht=scontent.ftun1-2.fna&oh=5953720cd0448f242588b8ccb5c395c1&oe=61D0E2CE"
       sx={{ width: 40, height: 40 }} className="avatar"/>
          </Link>
       
       </div>

        <div>
        <Link to="/iyed">
           <Avatar alt="iyed" src="https://scontent.ftun1-2.fna.fbcdn.net/v/t1.15752-9/264093350_667061624286768_7014612547382221283_n.png?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=_p1r1UuDR1sAX89lhrs&_nc_oc=AQkq87_8GTDyaN_cDVeVIi_hIF1ZqxKsI2Yt7h8OdSvJSOzlna1RXrivcJKYkyBWUHQ&_nc_ht=scontent.ftun1-2.fna&oh=abe31f161a89748b05cd17e36a30ff0f&oe=61D168D9"
       sx={{ width: 40, height: 40 }} className="avatar"/>
           </Link>
         
       </div>

       <div>
       <Link to="/ilyes"> 
       <Avatar alt="ilyes" src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.15752-9/263612153_449252463445944_7594961914525054500_n.png?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=NMWzwXl3cu0AX9j6KBZ&_nc_ht=scontent.fnbe1-2.fna&oh=253219ddb607c01a7fddce77d9421f4f&oe=61D1292F"
       sx={{ width: 40, height: 40 }} className="avatar"/>
       </Link>
     
       </div>

      </div>
           
        )
    }
    export default Menu;