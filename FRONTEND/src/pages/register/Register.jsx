import { Link } from "react-router-dom";
import "./Register.scss"
import React from 'react' ; 

export default function Register() {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                  <h1>Rights Watch</h1> 
                  <p>Learn about, Connect about, Talk about Human Rights</p> 
                  <span>Do you have an account?</span>
                  {/* react-router-dom link to the login page */}
                  <Link to="/login"><button>Login</button></Link> 
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder=" Confirm password" />
            
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

