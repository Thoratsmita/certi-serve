import React from 'react';
import './premium.css';
import { Link } from "react-router-dom";
const Premium = () => {
    return (
        <>
        <div className="containerPremium">

                <div className="premiumChoose" >
                    <p>Choose Membership</p>
                </div>
                
                <div className="mainPremium">
                    <Link to="/" className="premiumBasic">
                        <div className="premiumP">
                            <p className="premiumP1">Basic</p>
                            <p className="premiumP2">Free</p>
                         </div>
                    </Link>   
                </div>



        </div>
            
        </>
    )
}

export default Premium
