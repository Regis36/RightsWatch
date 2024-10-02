import React from "react";
import "./Navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";

import img1 from "../../Assets/profilepic.JPG"
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";


export default function Navbar(){ 
    
    const {toggle , darkMode} = useContext(DarkModeContext)
    const {currentUser} = useContext(AuthContext)

    return(
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>RightsWatch</span>     
                </Link>
                <div className="icons">
                    <HomeOutlinedIcon/>
                    {darkMode ? <WbSunnyOutlinedIcon onClick={toggle}/> :<DarkModeOutlinedIcon onClick={toggle}/>}
                    <GridViewOutlinedIcon/>
                </div>
                
                <div className="search">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="Search" />
                </div>
                <Link to="/explore" style={{textDecoration: "none"}}>
                    <span>Explore</span>
                </Link>
            </div>
            <div className="right">
                <div className="icons">
                    <PersonOutlineOutlinedIcon/>
                    <EmailOutlinedIcon/>
                    <NotificationsNoneOutlinedIcon/>
                </div>
                
                <div className="user">
                    <img src={img1} alt="" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    )
}