import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import "./Userfeed.scss"

export default function Userfeed (){
    return (
        <div className="home">
           <Stories/>
           <Posts/>
        </div>
    )
}
   


