import React, { useEffect } from 'react';
import './App.css';
import $ from 'jquery';
import { Link } from "react-router-dom";

/**
 * @author Parth Chaturvedi
 * @version 22-06-21
 */

export default function Navbar_Servee(props) {

    useEffect(() => {
        // $('.nav-link').on('click', function () {
        //     $('.active-link').removeClass('active-link');
        //     $(this).addClass('active-link');
        // });
        console.log(props.nav);

        switch (props.nav) {
            case '1': $('#project').addClass('active-link');
                break;
            case '4': $('#portfolio').addClass('active-link');
                break;
        }
    })

    return (
        <div className="Navbar">
            <div className="leftside">
                <div className="links">
                    <Link id="project" to='/servee/projects' className="nav-link">My Project</Link>
                    <Link id="dashboard" to='/servee/financialdashboard' className="nav-link">Dashboard</Link>
                    <Link id="inbox" to='/inbox' className="nav-link">Inbox</Link>
                    <Link id="portfolio" to='/portfolio' className="nav-link">Portfolio</Link>
                </div>
            </div>
            <div className="rightside"></div>
        </div>
    )
}