import React from "react";
import Navbar from "../../components/Navbar/Navbar";
//import Globe from "../Globe/globe";
import "./Explore.css" ; 
import Search from "../../components/News/Search";
import { useState } from "react"; 
import "../../components/Navbar/Navbar.scss"


export default function  Explore() {
    
    const [category,setCategory] = useState("world"); //initialize the state to display the general news

    return(
        <>
        {/* <div className="explore">
            {<Navbar/>}  */}

            <div className="body">
                {<Search/>}
            </div>
            
        {/* </div> */}
        
        </>

    )
}; 

 
