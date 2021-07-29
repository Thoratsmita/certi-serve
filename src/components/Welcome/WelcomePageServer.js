import React from "react";
import "./WelcomePageServee.css";
import Logo from "../../images/certi-serv-logo.png";
import FindJob from "../../images/FindJob.png";
import earnmoney from "../../images/Earn_money_overlay.png";
import { Link } from "react-router-dom";
const WelcomePageServer = () => {
  return (
    <div className="container">
      <div className="nav_1">
        <div className="nav_1_div">
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
            <Link to="/login" className="list_items">
              <li>Log In</li>
            </Link>
            <Link to="/" className="list_items">
              <li>Sign Up</li>
            </Link>
          </ul>
          <Link to="/findjobs">
            <img src={FindJob} className="FindJob" />
          </Link>
        </div>
      </div>
      <div className="nav_2">
        <div className="nav_2_div">
          <ul>
            <Link to="/" className="list_items_2">
              <li>MyJob</li>
            </Link>
            <Link to="/server/financialdashboard" className="list_items_2">
              <li>DashBoard</li>
            </Link>
            <Link to="/inbox" className="list_items_2">
              <li>Inbox</li>
            </Link>
            <Link to="/" className="list_items_2">
              <li>Feedback</li>
            </Link>
            <Link to="/portfolio" className="list_items_2">
              <li>Portfolio</li>
            </Link>
            <li className="empty_2"></li>
          </ul>
          <Link to="/" className="list_items_2 ">
            <button className="Subscription">Subscription</button>
          </Link>
          <li className="empty_2"></li>
        </div>
      </div>

      <div className="Image_div">
        <p className="p1">
          Hire the best <br />
          Servers for any <br />
          online
        </p>
        <p className="p2">
          Millions of people use to turn their ideas into reality
        </p>
        <Link to="/">
          <img className="EarnMoney" src={earnmoney} alt="EarnMoney" />
        </Link>
      </div>
    </div>
  );
};

export default WelcomePageServer;
