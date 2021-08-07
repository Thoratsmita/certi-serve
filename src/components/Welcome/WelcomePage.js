import React from "react";
import "./welcome.css";
import Logo from "../../images/certi-serv-logo.png";
import PostProject from "../../images/Project_overlay.png";
import backgroundImage from "../../images/Background_resized.gif";
import { Link } from "react-router-dom";


const WelcomePage = () => {
    return (
      <>
        <div className="containerNav1">
         
              <div className="leftNav1">
                <img src={Logo} alt="Logo" className="welcomelogo" />
                <Link to="/" className="linksNav1">How it Works</Link>
                <Link to="/findjobs" className="linksNav1">Browse Jobs</Link>
              </div>

              <div className="rightNav1">
                <Link to="/login" className="linksNav1">Log In</Link>
                <Link to="/signup" className="linksNav1">Sign Up</Link>
                <Link to="/servee/postproject" >
                <button className="postprojwelcome">Post a Project</button>
                </Link>
              </div>
           </div>


        <div className="containerNav2">
   
            <Link to="/" className="linksNav2">Find Jobs</Link>
            <Link to="/" className="linksNav2">Find Servers</Link>
            <Link to="/" className="linksNav2">Get Ideas</Link>
            <Link to="/" className="linksNav2">Resources</Link>
        
        </div>
      
          
        <div className="containerImage">
              <div className="welcomeTop">
                <div className="welcomeTopInner">
                <p className="welcomeP1">Hire the best<br/> Servers for any<br/>online</p>
                </div>
              </div>

              <div className="welcomeBottom">
                  <div className="welcomeBottomInner">
                  <p className="welcomeP2">Millions of people use to turn their ideas into reality</p>
                  <Link to="/" className="welcomeBtn"> Hire a Server</Link>
                  <Link to="/" className="welcomeBtn"> Earn Money</Link>
                  </div>
              </div>
            </div>    
      </>  
    ) 
  };

export default WelcomePage;
