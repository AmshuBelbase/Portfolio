import React, { useState } from "react";
import './SignUpForm.css';
import { IoIosSend } from "react-icons/io"; 
import { MdOutgoingMail, MdOutlineAppRegistration } from "react-icons/md";
import { FaLock, FaUser, FaAddressCard, FaPhoneSquareAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
const SignUpForm = ()=>{

    const [ user, setUser] = useState({
        username: "",
        register: "",
        phone: "",
        address: "",
        email: "",
        password: "",
        cpassword: ""
    })
    const handleChange = e =>{
        const{name,value} = e.target;
        // console.log(name);
        // console.log(value);
        setUser({
            ...user,
            [name]:value
        })
    }
    return(
        <div className="wrap"> 
            <h1>Sign Up</h1>
            <form href="#">
            <div className="container">
            <div className="input-field">
                <input type="text" name="username" value={user.username} placeholder="Username" onChange={handleChange} required/>
                <FaUser className="icon"/>
            </div>
            <div className="input-field">
                <input type="text" name="register" value={user.register} placeholder="Registration Number" onChange={handleChange} required/>
                <MdOutlineAppRegistration className="icon"/>
            </div>
            <div className="input-field">
                <input type="number" name="phone" value={user.phone} placeholder="Phone With Country Code eg. 91**********" onChange={handleChange} required/>
                <FaPhoneSquareAlt className="icon"/>
            </div>
            <div className="input-field">
                <input type="text" name="address" value={user.address} placeholder="Address" onChange={handleChange} required/>
                <FaAddressCard className="icon"/>
            </div>
            <div className="input-field">
                <input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} required/>
                <MdOutgoingMail className="icon"/>
            </div>
            <div className="input-field">
                <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange} required/>
                <FaLock className="icon"/>
            </div>
            <div className="input-field">
                <input type="password" name="cpassword" value={user.cpassword} placeholder="Confirm Password" onChange={handleChange} required/>
                <SiGnuprivacyguard  className="icon"/>
            </div>
            </div>
            <button type="submit">Register <IoIosSend className="icon"/></button>
            </form>
            <p>Already have an Account ? <a href="#">Login Here</a></p>
        </div>
    )
}
export default SignUpForm