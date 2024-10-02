import "./comments.scss"; 
import { useContext } from "react";
import {AuthContext} from "../../context/authContext"


const Comments = () =>{

    const {currentUser} = useContext(AuthContext) 
    
    //TEMPORARY 
    const comments = [ 
       
        {
            id:1, 
            desc: "Rights Watch keeps me and all my friends well versed and updated on Human Rights issues around the world",
            name: "Jane Doe" , 
            userId: 1,
            profilePic: "https://images.pexels.com/photos/8924458/pexels-photo-8924458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 2, 
            desc: "Rights Watch is a new way to look at civil activism and engagement!",
            name: "John Doe",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/8899223/pexels-photo-8899223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },

    ];

    return(
        <div className="comments">
            <div className="write">
                <img src={currentUser.profilePic} alt="" />
                <input type="text" placeholder="write a comment" />
                <button>send</button>
            </div>
            {
            comments.map((comment)=>(
                <div className="comment">
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span><div className="date"> 1 hr ago</div></span>
                </div>
            ))
        }
        </div>
    );
};

export default Comments;