import React from "react";
import "./Rightbar.scss";
import friend1 from "../../Assets/HRW.png"
import friend2 from "../../Assets/Greta.jpeg"
import friend3 from "../../Assets/Internet_Society.png"
import friend4 from "../../Assets/UnitedSikhs.jpeg";
import friend5 from "../../Assets/Antonio.jpeg";
import friend6 from "../../Assets/NAACP.png"

export default function Rightbar(){ 
    return(
        <div className="rightbar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You </span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend1} alt="" />
                            <span>Human Rights Watch</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend2} alt="" />
                            <span>Greta Thunberg</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend3} alt="" />
                            <p>
                                <span>Internet Society </span> 
                                just posted! 
                            </p>
                            
                        </div>
                        <span> 1 min ago</span>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={friend4} alt="" />
                            <p>
                                <span>United Sikhs </span> 
                                created an event
                            </p>
                            
                        </div>
                        <span> 1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend5} alt="" />
                            <p>
                                <span>Antonoio </span> 
                                shared an article 
                            </p>
                            
                        </div>
                        <span> 1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend6} alt="" />
                            <p>
                                <span>NAACP </span> 
                                commented  
                            </p>
                            
                        </div>
                        <span> 1 min ago</span>
                    </div>
                </div>
                
                <div className="item">
                    <span>Online friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={friend3} alt="" />
                            <div className="online"/>
                            <span>John Doe </span> 
                            
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={friend3} alt="" />
                            <div className="online"/>
                            <span>John Doe  </span> 
                            
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={friend3} alt="" />
                            <div className="online"/>
                            <span>John Doe  </span> 
                            
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={friend3} alt="" />
                            <div className="online"/>
                            <span>John Doe  </span> 
                            
                        </div>
                    </div>

                    <div className="user">
                        <div className="userInfo">
                            <img src={friend3} alt="" />
                            <div className="online"/>
                            <span>John Doe  </span> 
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}