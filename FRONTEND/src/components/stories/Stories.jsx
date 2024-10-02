import "./stories.scss"; 
import friend4 from "../../Assets/profilepic.JPG";
import { useContext } from "react";
import {AuthContext} from "../../context/authContext"

export default function Stories() {

    const {currentUser} = useContext(AuthContext)
    //TEMPORARY DUMMY DATA 
    const stories = [
        {
            id: 1, 
            name: "United Nations", 
            img: "https://izood.net/wp-content/uploads/2023/08/this-story-is-unavailable-instagram-1.webp"
        },
        {
            id: 2, 
            name: "United Sikhs", 
            img: "https://izood.net/wp-content/uploads/2023/08/this-story-is-unavailable-instagram-1.webp"
        },
        {
            id: 3, 
            name: "The Internet Society", 
            img: "https://izood.net/wp-content/uploads/2023/08/this-story-is-unavailable-instagram-1.webp"
        },
        {
            id: 4, 
            name: "Amnesty International", 
            img: "https://izood.net/wp-content/uploads/2023/08/this-story-is-unavailable-instagram-1.webp"
        }
    ]
    return (
        <div className="stories">
            <div className="story">
                <img src={friend4} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
            {stories.map(story =>(
                <div className="story" key ={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
};