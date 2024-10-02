import "./Profile.scss"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone"; 
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter"; 
import PlaceIcon from "@mui/icons-material/Place"; 
import LanguageIcon from "@mui/icons-material/Language"; 
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined"; 
import MoretVertIcon from "@mui/icons-material/MoreVert"; 
import Posts from "../../components/posts/Posts"
const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img src="https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  alt="" className="cover"/>
                <img src="http://localhost:3001/static/media/profilepic.c4853e3f92b7dbb24772.JPG"  className="profilePic"/>
            </div>

            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="http://facebook.com">
                            <FacebookTwoToneIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <InstagramIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <TwitterIcon fontSize="large" />
                        </a>
                        <a href="http://facebook.com">
                            <LinkedInIcon fontSize="large" />
                        </a>
                        
                    </div>
                    <div className="center">
                        <span>Regis Enama </span>
                        <div className="info">
                            <div className="item">
                                <PlaceIcon/>
                                <span>USA</span>
                            </div>
                            <div className="item">
                                <LanguageIcon/>
                                <span>French, English</span>
                            </div>
                            
                        </div>
                        <button>follow</button>
                    </div>
                    <div className="right">
                        <EmailOutlinedIcon/>
                        <MoretVertIcon/>
                    </div>
                </div>
                <Posts/>
            </div>
            
        </div>

    )
}

export default Profile 