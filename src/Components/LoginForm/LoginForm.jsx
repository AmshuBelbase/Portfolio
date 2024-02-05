import React, { useState } from "react";
import './LoginForm.css';
import { IoLogIn } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";
import { FaLock } from "react-icons/fa"; 
const LoginForm =() =>{
    const [userlog, setLog] = useState({
        email:"",
        password:""
    })
    const handlelogChange = e => {
        const{name, value} = e.target;
        setLog({
            ...userlog,
            [name]:value
        })
    }
    return(
        <div className='wrapper'>
            <form action="#">
                {console.log("User Details:", userlog)}
                <h1>Log In</h1>
                <div className="input-box">
                    <input type="email" name="email" value={userlog.email} onChange={handlelogChange} placeholder="Email" required/>
                    <MdOutgoingMail className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" name="password" value={userlog.password} onChange={handlelogChange} placeholder="Password" required/>
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label>
                        <input type="checkbox"/>Remember Me
                    </label>
                    <a href="#">Lost Password ?</a>
                </div>
                <button type="submit">Log In <IoLogIn className="icon"/></button>
                <div className="register-link">
                    <p>Don't have an account ? <a href="#">Register Here</a></p>
                </div>
            </form>
        </div>
    )
}
export default LoginForm