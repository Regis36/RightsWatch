//file to toggle the dark and light modes on the website
import { createContext } from "react";
import { useState, useEffect } from "react";
import img1 from "../Assets/profilepic.JPG"

export const AuthContext = createContext();

export const AuthContextProvider= ({children}) =>{
    const [currentUser,setcurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
);

const login =() =>{
    //TO DO
    setcurrentUser({
        id:1,
        name:"Regis Enama",
        profilePic:{img1}
    });
};
    
useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(currentUser));
},[currentUser])

return(
    <AuthContext.Provider value={{currentUser,login }}>
        {children}
    </AuthContext.Provider>
)
};