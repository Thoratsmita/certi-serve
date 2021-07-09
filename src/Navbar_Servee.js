import React, { useEffect } from 'react';
import './App.css';
import $ from 'jquery';

/**
 * @author Parth Chaturvedi
 * @version 22-06-21
 */

export default function Navbar_Servee() {

    useEffect(() => {
        $('.nav-link').on('click', function () {
            $('.active-link').removeClass('active-link');
            $(this).addClass('active-link');
        });
    })

    return (
        <div className="Navbar">
            <div className="leftside">
                <div className="links">
                    <a className="nav-link active-link" href="#myproject">My Project</a>
                    <a className="nav-link" href="#dashboard">Dashboard</a>
                    <a className="nav-link" href="#inbox">Inbox</a>
                    <a className="nav-link" href="#feedback">Feedback</a>
                    <a className="nav-link" href="#credit">Free Credit</a>
                </div>
            </div>
            <div className="rightside"></div>
        </div>
    )
}