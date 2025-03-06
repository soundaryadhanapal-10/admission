import React from 'react'
import { Link } from "react-router-dom";
export const Sidebar = () => {
  return (
    
      <div className="main">
        <div className="hearder">
        <div className="logoimage">
              <img src="mylogo.png" className="logo" />
        </div> 
        <div className="txt"><h2>Students Details</h2></div>
        </div>
      <div className="sidenavbar">
            <ul className="navbar">
             <Link to="/"><li>About</li></Link> 
             <Link to="/dashboard"><li>Dashboard</li></Link> 
             <Link to="/profile"> <li>Profile</li></Link>
             <Link to="/admission"><li>Admission</li></Link>
             
            </ul>
      </div>
      </div>
    
    );
}
