import Post from "../post/Post";
import "./posts.scss"; 

export default function Posts() {
   //TEMPORARY DATA 
   const posts = [
    {
        id : 1,
        name: "Regis Enama",
        userId: 1, 
        profilePic: "http://localhost:3001/static/media/profilepic.c4853e3f92b7dbb24772.JPG",
        desc: "Human Rights are constantly being violated across the world. We know about most, because of what we see online or in the media, but truth be told, most of it gets forgotten and swept under the rug, allowing for future, potentially worse abuses to take place. Not to mention with the new rise in AI and its incorporation into every aspect of our everyday lives, We at RightsWatch find it completely necessary to keep watch of those types of abuses that can't be monitored or threatened.",
        img: "https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id : 2,
        name: "John Doe",
        userId: 2, 
        profilePic: "https://images.pexels.com/photos/8899223/pexels-photo-8899223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "Meta's Oversight Board Rules 'From the River to the Sea' Isn't Hate Speech",
    }
    
   ]
    return(
        <div className="posts">
            {posts.map(post =>(
               <Post post={post} key={post.id}/>
            ))}
        </div>
    )
}