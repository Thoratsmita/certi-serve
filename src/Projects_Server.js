import React, { useState, useEffect } from 'react';
import Navbar from './Navbar_Servee';
import $ from 'jquery';
import project from './images/My_Jobs_Server.png';
import { Link } from "react-router-dom";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import CreateIcon from '@material-ui/icons/Create';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import PrintIcon from '@material-ui/icons/Print';

/**
 * @author Parth Chaturvedi
 * @version 10-07-21
 */

export default function Projects_Server() {

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
            <Navbar />
            <div className="PrjServee">
                <div className="PrjServeeHead">
                    <h1>Projects</h1>
                    <button>Servee</button>
                </div>
                <div className="PrjServeeTab">
                    <a className="tab active-tab" onClick={() => handleOpenPrj()}>All Open</a>
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
                        <div className="PrjServerAll">
                            <img src={project} alt="project image" />
                            <h3>Start earning by projects based on your skills</h3>
                            <div className="PrjServerBtnGr">
                                <div className="PrjServerBtn">
                                    <InsertPhotoIcon style={{ display: 'inline' }} />
                                    <div className="PrjServerDis">
                                        <p>Design</p>
                                        <span>9 projects</span>
                                    </div>
                                    <ChevronRightIcon style={{ color: '#717071' }} />
                                </div>
                            </div>
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

