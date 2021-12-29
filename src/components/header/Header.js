import React from 'react'
import SearchBar from '../SearchBar';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import './header.css';
import logo from './logo.svg';
import { Badge, Button, Popover } from '@mui/material';
import {useHistory} from 'react-router-dom'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { PersonAddAlt1Outlined } from '@mui/icons-material';




const Header = () => {

  
  const [anchorEl, setAnchorEl] = React.useState(null);


  const history = useHistory();
  const handleThumbLink = () => history.push("/main");


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
    

    return (
        <div className="header">
         <MenuIcon style={{marginLeft:'5px',color:"rgb(255, 255, 255)"}}/> 
        <div>
          
          <img className="header__logo"onClick={handleThumbLink}
          src={logo}/>
        </div>

          <div className="header__input"id="gg">

           <input type="text" className="no-outline
"  placeholder="Search"/>
           <SearchIcon className="header__inputButton"/>

        </div>


        <div className="header__icon">

           <VideoCallIcon className="header__icons"/>
           <AppsIcon className="header__icons"/>
           <NotificationsIcon className="header__icons"/>

       

           <Avatar onClick={handleClick} alt="ilyes"  sx={{ width: 24, height: 24 }} />
           
           <Popover
           open={open}
          id={id}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
          }}>
            <div className="home__popoverContainer">
            <div className="home__popover__top">
            <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={
                  <div className="home__badge">
                    <PhotoCameraIcon className="home__camera" />
                  </div>
                }
              >
                <Avatar className="classes.large" />
              </Badge>

              <div className="home__text">
                    <div className="home__displayName" >Marah Baccari</div>
                    <div className="home__mail">mb@gmail.com</div>
               </div>  

               <div className="home__btn">Manage your google account</div>               
               <div className="home__addBtn">
                 <PersonAddAlt1Outlined className="home__addIcon" />
                 <p>Add another account</p>
               </div>
               <Button variant='outlined' className="signOut">Sign Out</Button>
                <div className="home__popover__footer">
                  <p>Privacy Policy</p>
                  <span>•</span>
                  <p>Terms of service</p>
                </div>
               </div>

              </div> 
      
        </Popover>
        
       
         
            </div> 
             </div>
         
        
    )
}

export default Header;
  