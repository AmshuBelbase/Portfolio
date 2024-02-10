import React from "react";
import "./HomePage.css";
const HomePage = ({ setLoginUser }) => {
  return (
    <div className="homewrap">
      <h1>Out🔒</h1>
      <button className="logout" onClick={() => setLoginUser({})}>
        Logout
      </button>
    </div>
  );
};
export default HomePage;
