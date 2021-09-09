import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar_Servee from './Navbar_Servee';
import EditIcon from '@material-ui/icons/Edit';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const profile = {
    border: '3px solid #22b810',
    borderRadius: '50%',
    color: '#8b8b8b',
    fontSize: '5rem',
    marginLeft: '25px',
    position: 'absolute',
    top: '150px',
    backgroundColor: '#fff',
}

function PortfolioServee() {
    return (
        <>
            <Navbar_Servee />
            <div className="portfolio">
            <div className="portfolio-servee">
                <h3 className="portfolioHead">My portfolio</h3>
                <div className="portfolioCover">
                    <EditIcon style={{ color: '#0a6b3d', float: 'right', marginTop: '20px',marginRight:'50px' }} />
                </div>
                
                <div className="portfolio-servee-details">
                        {/* <div className="portfolio-servee-input-border"> */}
                        <input type="text" placeholder="update phone number" className="portfolio-servee-input"></input>
                        {/* </div> */}
                        <div>
                            <input type="text" placeholder="Update Email Address" className="portfolio-servee-input"></input>
                            <button className="portfolio-servee-email-verify">verify</button>
                        </div>
                        <input type="text" placeholder="Add Alternate Phone no" className="portfolio-servee-input"></input><br></br>
                        <select name="gender" placeholder="select gender" className="portfolio-servee-input">
                            <option value="male">male</option>
                            <option value="female">female</option>
                       </select><br></br>
                        <input type="text" placeholder="Update Address" className="portfolio-servee-input"></input><br></br>
                    </div>
                    <PersonOutlineOutlinedIcon style={profile} />
            </div>
            </div> 
        </>
    )
}

export default PortfolioServee