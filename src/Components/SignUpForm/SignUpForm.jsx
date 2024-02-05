import React from "react";
import './SignUpForm.css';
import { IoIosSend } from "react-icons/io"; 
import { MdOutgoingMail, MdOutlineAppRegistration, MdConfirmationNumber  } from "react-icons/md";
import { FaLock, FaUser, FaAddressCard, FaPhoneSquareAlt } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
const SignUpForm = ()=>{
    return(
        <div className="wrap">
            <h1>Sign Up</h1>
            <form href="#">
            <div className="container">
            <div className="input-field">
                <input type="text" placeholder="Username" required/>
                <FaUser className="icon"/>
            </div>
            <div className="input-field">
                <input type="text" placeholder="Registration Number" required/>
                <MdOutlineAppRegistration className="icon"/>
            </div>
            <div className="input-field">
                <input type="number" placeholder="Phone With Country Code eg. 91**********" required/>
                <FaPhoneSquareAlt className="icon"/>
            </div>
            <div className="input-field">
                <input type="text" placeholder="Address" required/>
                <FaAddressCard className="icon"/>
            </div>
            <div className="input-field">
                <input type="email" placeholder="Email" required/>
                <MdOutgoingMail className="icon"/>
            </div>
            <div className="input-field">
                <input type="password" placeholder="Password" required/>
                <FaLock className="icon"/>
            </div>
            <div className="input-field">
                <input type="password" placeholder="Confirm Password" required/>
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