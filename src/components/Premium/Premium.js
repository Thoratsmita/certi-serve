import React from 'react';
import './premium.css';
import { Link } from "react-router-dom";
import sub from "../../images/sub_icon.png";
import logo from "../../images/certi-serv-logo.png";

const Premium = () => {
    return (
     <>
     <div className="containerPremium">
        <div className="containerNavPremium">
            <img src={logo} className="logoPremium" alt="logo" />
        </div>
            
        <div className="mainPremiumContent">
            <div className="chooseMembership">
                Choose Membership
            </div>
            <div className="boxPremium">
                 <Link to="/" className="buttonTopPremium"> 
                  <div className="basicPremium">
                      <a>Basic</a>
                    </div>
                    <div className="freePremium">
                      <a>Free</a>
                    </div>
                 </Link>

                <Link to="/" className="buttonBottomPremium"> 
                    <div className="bottomPremium">
                      <a>Premium</a>
                    </div>
                    <div>
                      <img src={sub} className="imagePremiumBottom" alt="image"/>
                    </div>
                </Link>
               
                <Link to="/" className="skipPremium">
                    <p >Skip for now ---></p>
                </Link>

            </div>
        </div>
       
          </div>  
        </>
    )
}

export default Premium
