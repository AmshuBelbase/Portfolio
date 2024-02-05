import React from "react";
import './LoginForm.css';
import { IoLogIn } from "react-icons/io5";
import { FaUser, FaLock } from "react-icons/fa"; 
const LoginForm =() =>{
    return(
        <div class='wrapper'>
            <form action="#">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="User Name" required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox"/>Remember Me
                    </label>
                    <a href="#">Lost Password ?</a>
                </div>
                <button type="submit">Login <IoLogIn className="icon"/></button>
                <div className="register-link">
                    <p>Don't have an account ? <a href="#">Register Here</a></p>
                </div>
            </form>
        </div>
    )
}
export default LoginForm