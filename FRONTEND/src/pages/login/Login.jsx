import { Link } from "react-router-dom";
import "./Login.scss"
import React, { useContext } from 'react' ; 
import { AuthContext } from "../../context/authContext";

export default function Login() {

    const {login} = useContext(AuthContext)

    const handleLogin = () =>{
        login();
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                  <h1>Rights Watch</h1> 
                  <p>Learn about, Connect about, Talk about Human Rights</p> 
                  <span>Don't have an account?</span>
                {/* react-router-dom link to the Register page */}
                  <Link to="/register"><button>Register</button></Link>
                  
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

