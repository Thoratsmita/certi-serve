import React from "react";
import "./WelcomePageServer.css";
import Logo from "../images/certi-serv-logo.png";
import FindJob from "../images/FindJob.png";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { Button } from "@material-ui/core";
import earnmoney from "../images/Earn_money_overlay.png";
import { Link } from "react-router-dom";
const WelcomePageServer = () => {
  return (
    <div className="welcomeServer">
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
              <img src={FindJob} className="FindJob" />
            </Link>
          </div>
        </div>
        <div className="nav_2">
          <div className="icon">
            <ul>
              <Link to="/" className="list_items_2">
                <li>My Job</li>
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
              <Link to="/" className="list_items_2">
                <li>Portfolio</li>
              </Link>
              <li className="empty_2"></li>
            </ul>
            <Link to="/" className="list_items_2">
              <Button
                variant="contained"
                color="#ffffff"
                className="btn"
                endIcon={<AcUnitIcon>Subscribe</AcUnitIcon>}
              >
                Subscribe
              </Button>
            </Link>
<<<<<<< HEAD
            <li className="empty_2"></li>
          </ul>
          <Link to="/" className="list_items_2 test">
            <button className="Subscription">Subscription</button>
          </Link>
=======
          </div>
>>>>>>> 9a33588f63f64651d93136feabbe1267c5ac86af
        </div>

<<<<<<< HEAD
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
          <img className="EarnMoney" src={earnmoney} alt="EarnMoney" />
        </Link>
=======
        <div className="content">
          <div>
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
>>>>>>> 9a33588f63f64651d93136feabbe1267c5ac86af
      </div>
    </div>
  );
};

export default WelcomePageServer;
