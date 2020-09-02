import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Header() {

    const [inputSearch,setInputSearch]=useState('')
    return ( 
        <div className="header">
           <div className="header__left"> 
            <MenuIcon/>
            <Link to="/"> <img className="header__logo" src="data:image/png;base64,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" alt=""/>            </Link>
           
          
           
        </div>
        <div className="header__input">
        <input onChange={e=>setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
        <Link to={{pathname:"/search",search:inputSearch,hash:'hash'}}><SearchIcon className="header__inputButton"/></Link>
        </div>
        <div className="header__icons">
        <VideoCallIcon className="header__icon"/>
        <AppsIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <Avatar alt="Remy Sharp" src="https://yt3.ggpht.com/-LqjtwvyHSbk/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcJnmZXaBGiz5Kroh2fNyy6k1JhQ/s88-c-k-c0xffffffff-no-rj-mo/photo.jpg" />
        </div>
    
        </div>
    )
}

export default Header
