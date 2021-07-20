import React, { useState, useEffect } from 'react';
import Navbar from './Navbar_Servee';
import $ from 'jquery';
import { Link } from "react-router-dom";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

/**
 * @author Parth Chaturvedi
 * @version 22-06-21
 */

export default function Projects_Servee() {

    const [openPrj, setIsOpenPrj] = useState(true);
    const [currPrj, setIsCurrPrj] = useState(false);
    const [pastPrj, setIsPastPrj] = useState(false);
    const [pastPrjData, setPastPrjData] = useState([]);
    const url = 'http://localhost:8000/projects/past';

    const handleOpenPrj = () => {
        setIsOpenPrj(true);
        setIsCurrPrj(false);
        setIsPastPrj(false);
    }

    const handleWorkPrj = () => {
        setIsOpenPrj(false);
        setIsCurrPrj(true);
        setIsPastPrj(false);
    }

    const handlePastPrj = () => {
        setIsOpenPrj(false);
        setIsCurrPrj(false);
        setIsPastPrj(true);
        getPastPrj();
    }

    const getPastPrj = async () => {
        const response = await fetch(url);
        const pstPrj = await response.json();
        setPastPrjData(pstPrj);
    }

    useEffect(() => {

        $('.tab').on('click', function () {
            $('.active-tab').removeClass('active-tab');
            $(this).addClass('active-tab');
        });

    })

    return (
        <>
            <Navbar nav='1'/>
            <div className="PrjServee">
                <div className="PrjServeeHead">
                    <h1>Projects</h1>
                    <button>Servee</button>
                </div>
                <div className="PrjServeeTab">
                    <a className="tab active-tab" onClick={() => handleOpenPrj()}>Open Project</a>
                    <a className="tab " onClick={() => handleWorkPrj()}>Work in Progress</a>
                    <a className="tab " onClick={() => handlePastPrj()}>Past Project</a>
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
                    {openPrj && (
                        <div className="PrjServeeNew">
                            <h3>Create a New Project</h3>
                            <p>Millions of talented Servers are ready to help you do amazing things</p>
                            <Link to='/servee/postproject'>
                                <button>Post a Project</button>
                            </Link>
                        </div>

                    )}
                    {pastPrj && (
                        <>
                            <table className='PrjServeePast'>
                                <thead>
                                    <tr>
                                        <th>Project Name</th>
                                        <th>Description</th>
                                        <th>Servee Name</th>
                                        <th>Date</th>
                                        <th>Payment</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pastPrjData.map((prj) => {
                                        const { projectName, description, servee, date, payment, status } = prj;
                                        const sub = description.substring(0, 50) + '...';
                                        return (
                                            <tr>
                                                <td className="frstCol">{projectName}</td>
                                                <td>{sub}</td>
                                                <td>{servee}</td>
                                                <td>{date}</td>
                                                <td>{payment}</td>
                                                <td>{status}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                            <div className="PrjServeePastIcon">
                                <ChevronLeftIcon />
                                <ChevronRightIcon />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

