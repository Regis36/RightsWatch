import React, { useContext } from "react";
import "./Leftbar.scss"
import BarChartIcon from '@mui/icons-material/BarChart';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import img1 from "../../Assets/profilepic.JPG"
import { AuthContext } from "../../context/authContext";


export default function Leftbar(){ 

    const {currentUser} = useContext(AuthContext)

    return(
        <div className="Leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={img1} alt="" />
                        <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <BarChartIcon/>
                        <span> Outreach</span>
                    </div>
                    <div className="item">
                        <div className="icon"><ThumbUpIcon/></div>
                        <span>Likes</span>
                    </div>
                    <div className="item">
                    <div className="icon"><GroupsIcon/></div>
                        <span>Groups</span>
                    </div>
                    <div className="item">
                    <div className="icon"><BookmarkIcon/></div>
                        <span>bookmarks</span>
                    </div>
                    <div className="item">
                    <div className="icon"><PlayCircleIcon/></div>
                        <span>videos</span>
                    </div>
                
                </div>

                <hr />

                <div className="menu">
                    <span>Your shortcuts</span>
                    {/* events, articles, Gallery, Memories */}
                    <div className="item">
                        <div className="icon">
                        <CalendarMonthOutlinedIcon/>
                        </div>
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <div className="icon">
                        <ArticleOutlinedIcon/>
                        </div>
                        <span>Articles</span>
                    </div>
                    <div className="item">
                        <div className="icon">
                        <CollectionsOutlinedIcon/>
                        </div>
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <div className="icon">
                        <AccessAlarmOutlinedIcon/>
                        </div>
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>other</span>
                    <div className="item">
                        <div className="icon">
                        <SchoolOutlinedIcon/>
                        </div>
                        <span>Courses</span>
                    </div>
                    <div className="item">
                        <div className="icon">
                        <LocalLibraryOutlinedIcon/>
                        </div>
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <div className="icon">
                        <LocalHospitalOutlinedIcon/>
                        </div>
                        <span>Fundraise</span>
                    </div>
                    <div className="item">
                        <div className="icon">
                        <InfoOutlinedIcon/>
                        </div>
                        <span>About us</span>
                    </div>
                </div>
            </div>
        </div>
    )
}