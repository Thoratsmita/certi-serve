import React, { useEffect } from 'react';
import './App.css';
import $ from 'jquery';
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

/**
 * @author Parth Chaturvedi
 * @version 22-06-21
 */

export default function Navbar_Server(props) {

    useEffect(() => {
        switch (props.nav) {
            case '1': $('#project').addClass('active-link');
                break;
            case '2': $('#dashboard').addClass('active-link');
                break;
            case '3': $('#inbox').addClass('active-link');
                break;
            case '4': $('#portfolio').addClass('active-link');
                break;
        }
    })

    return (
        <div className="Navbar">
            <div className="leftside">
                <div className="links">
                    <Link id="project" to='/server/projects' className="nav-link">Details</Link>
                    <Link id="dashboard" to='/server/financialdashboard' className="nav-link">Proposals</Link>
                    <Link id="inbox" to='/inbox' className="nav-link">Your Proposals</Link>
                    <Link id="portfolio" to='/milestone' className="nav-link">Manegement</Link>
                </div>
            </div>
            <div className="rightside">
                <PersonOutlineOutlinedIcon style={{color: '#ffffff', borderRadius: '50%', border: '2px solid #a1f6a5', fontSize: '28px'}}/>
                <div className="rightName">
                    <span>Lorem Ipsum</span>
                    <div>@0.00 INR</div>
                </div>
            </div>
        </div>
    )
}