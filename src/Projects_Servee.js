import React, { useEffect } from 'react';
import Navbar from './Navbar_Servee';
import $ from 'jquery';
import { Link } from "react-router-dom";


export default function Projects_Servee() {

    useEffect(() => {
        $('.tab').on('click', function () {
            $('.active-tab').removeClass('active-tab');
            $(this).addClass('active-tab');
        });
    })

    return (
        <>
            <Navbar />
            <div className="PrjServee">
                <div className="PrjServeeHead">
                    <h1>Projects</h1>
                    <button>Servee</button>
                </div>
                <div className="PrjServeeTab">
                    <a className="tab active-tab" href="#openproject">Open Project</a>
                    <a className="tab " href="#workinprogress">Work in Progress</a>
                    <a className="tab " href="#pastproject">Past Project</a>
                </div>
                <form className="PrjServeeForm">
                    <input type="text" name="search" placeholder="Search Project" />
                    <label id="show" htmlFor="show">Show</label>
                    <select id="show">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="40">30</option>
                        <option value="100">100</option>
                    </select>
                    <label htmlFor="view">View</label>
                    <select id="view">
                        <option value="all">All</option>
                        <option value="lorem">lorem</option>
                        <option value="lorem">lorem</option>
                        <option value="lorem">lorem</option>
                        <option value="lorem">lorem</option>
                    </select>
                </form>
                <div className="PrjServeeResult">
                    <h3>Create a New Project</h3>
                    <p>Millions of talented Servers are ready to help you do amazing things</p>
                    <Link to='/servee/postproject'>
                        <button>Post a Project</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

