import React from "react";
import "./WelcomePageServee.css";
import Logo from "../images/certi-serv-logo.png";
import PostProject from "../images/Project_overlay.png";
import HireServer from "../images/Hire_server_overlay.png";
import Sub_icon from "../images/subscription_icon.png";
import { Link } from "react-router-dom";

const WelcomePageServee = () => {
  return (
    <div className="container">
      <div className="nav_1">
        <div className="float">
          <ul>
            <Link to="/">
              <li>
                <img src={Logo} className="image" />
              </li>
            </Link>
            <Link to="/" className="list_items">
              <li>Browse Jobs</li>
            </Link>
            <Link to="/" className="list_items">
              <li>Job Categories</li>
            </Link>
            <li className="empty"></li>
            <Link to="/" className="list_items">
              <li>Log In</li>
            </Link>
            <Link to="/" className="list_items">
              <li>Sign Up</li>
            </Link>
          </ul>
          <Link to="/">
            <img src={PostProject} className="PostProject" />
          </Link>
        </div>
      </div>
      <div className="nav_2">
        <div className="icon">
          <ul>
            <Link to="/" className="list_items_2">
              <li>Projects</li>
            </Link>
            <Link to="/" className="list_items_2">
              <li>DashBoard</li>
            </Link>
            <Link to="/" className="list_items_2">
              <li>Inbox</li>
            </Link>
            <Link to="/" className="list_items_2">
              <li>Feedback</li>
            </Link>

            <li className="empty_2"></li>
          </ul>
          <Link to="/" className="list_items_2 test">
            <button className="Subscription">Subscription</button>
          </Link>
        </div>
      </div>

      <div className="content">
        <p className="p1">
          Hire the best <br />
          Servers for any <br />
          online
        </p>
        <p className="p2">
          Millions of people use to turn their ideas into reality
        </p>
        <Link to="/">
          <img className="HireServer" src={HireServer} alt="HireServer" />
        </Link>
      </div>
    </div>
  );
};

export default WelcomePageServee;
