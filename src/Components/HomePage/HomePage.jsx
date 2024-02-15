import "./HomePage.css";
import React, { useState } from "react";
import { IoLogIn } from "react-icons/io5";
import { MdOutgoingMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const HomePage = ({ setLoginUser }) => {
  const [displayContent, setDisplayContent] = useState("none");

  const toggleDisplay = () => {
    setDisplayContent(displayContent === "none" ? "block" : "none");
  };
  return (
    <div className="homewrap">
      {/* <h1>Out🔒</h1>
      <button className="logout" onClick={() => setLoginUser({})}>
        Logout
      </button> */}
      <h1>Check Priority</h1>
      <div className="input-box">
        <label>District Name*</label>
        <input
          type="text"
          name="districtName"
          placeholder="District Name"
          required
        />
      </div>
      <div className="input-box">
        <label>Fraudulent Amount*</label>
        <input
          type="number"
          name="fraudulentAmount"
          placeholder="Fraudulent Amount"
          required
        />
      </div>
      <div className="input-box">
        <label>Sub Category of Client*</label>
        <input
          type="text"
          name="subCategoryClient"
          placeholder="Sub Category of Client"
          required
        />
      </div>
      <div className="input-box">
        <label>Suspect Name*</label>
        <input
          type="text"
          name="suspectName"
          placeholder="Suspect Name"
          required
        />
      </div>
      <div className="input-box">
        <label>Suspect Mobile Number*</label>
        <input
          type="number"
          name="suspectMobile"
          placeholder="Suspect Mobile Number"
          required
        />
      </div>
      <div className="input-box">
        <label>Incident Date*</label>
        <input
          type="date"
          name="incidentDate"
          placeholder="Incident Date"
          required
        />
      </div>
      <div className="input-box">
        <label>Complaint Date*</label>
        <input
          type="date"
          name="complaintDate"
          placeholder="Complaint Date"
          required
        />
      </div>
      <div className="display-box" style={{ display: displayContent }}>
        <p>PRIORITY DISPLAYED HERE</p>
      </div>
      <button type="submit" onClick={toggleDisplay}>
        Check <IoLogIn className="icon" />
      </button>
    </div>
  );
};
export default HomePage;
