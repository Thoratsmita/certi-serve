import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './App.css';
import Navbar_Servee from './Navbar_Servee';
import EditIcon from '@material-ui/icons/Edit';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

/**
 * @author Parth Chaturvedi
 * @version 08-07-21
 */

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

export default function portfolio() {

    return (
        <>
            <Navbar_Servee />
            <div className="portfolio">
                <div className="portfolioLft">
                    <h3 className="portfolioHead">My portfolio</h3>
                    <div className="portfolioCover"></div>
                    <div className="portfolioName">
                        <h2>Full Name</h2>
                        <EditIcon style={{ color: '#0a6b3d', float: 'right', marginTop: '-30px' }} />
                        <p className="desig">Designation</p>
                        <p className="address">Full Address (City, State, Country)</p>
                        <button>Contact</button>
                        <span> Status</span>
                    </div>
                    <PersonOutlineOutlinedIcon style={profile} />

                    <div className="portfolioEdu">
                        <h3>Education</h3>
                        <EditIcon style={{ color: '#0a6b3d', float: 'right' }} />
                        <div className="eduDetail">
                            <div className="edu">
                                <b>Institute Name - Lorem ipsum lorem ipsum, lorem ipsum lorem lorem ipsum lorem lorem</b>
                                <p>Course Name - Branch/Stream</p>
                                <p>Start Date - End Date</p>
                            </div>
                            <hr />
                            <div className="edu">
                                <b>Institute Name - Lorem ipsum lorem ipsum, lorem ipsum lorem lorem ipsum lorem lorem</b>
                                <p>Course Name - Branch/Stream</p>
                                <p>Start Date - End Date</p>
                            </div>
                            <hr />
                            <button className="payDetailView" type="button">View All <ExpandMoreIcon style={{ fontSize: '16px', color: '#73b43c' }} /></button>
                        </div>
                    </div>
                    <div className="portfolioEdu">
                        <h3>Experience</h3>
                        <EditIcon style={{ color: '#0a6b3d', float: 'right' }} />
                        <div className="eduDetail">
                            <div className="edu">
                                <b>Company Name - Lorem ipsum lorem ipsum, lorem ipsum lorem lorem ipsum lorem lorem</b>
                                <p>Dedignation</p>
                                <p>Start Date - End Date</p>
                            </div>
                            <hr />
                            <div className="edu">
                                <b>Company Name - Lorem ipsum lorem ipsum, lorem ipsum lorem lorem ipsum lorem lorem</b>
                                <p>Dedignation</p>
                                <p>Start Date - End Date</p>
                            </div>
                            <hr />
                            <button className="payDetailView" type="button">View All <ExpandMoreIcon style={{ fontSize: '16px', color: '#73b43c' }} /></button>
                        </div>
                    </div>
                </div>
                <div className="portfolioRgh">
                    <div className="portfolioPast">
                        <EditIcon style={{ color: '#0a6b3d', float: 'right' }} />
                        <h3>Past Projects</h3>
                        <span>(with Certi serv)</span>
                        <hr />
                        <div className="prj">
                            <b>Project Name </b>
                            <span>(Servee Name)</span>
                            <table>
                                <tr>
                                    <td>Company Name</td>
                                    <td></td>
                                    <td>Designation</td>
                                </tr>
                                <tr>
                                    <td>Join Date/End Date</td>
                                    <td></td>
                                    <td>City</td>
                                </tr>
                            </table>
                            <p>
                                Project Description Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut accusam et justo
                                duo dolores et ea rebum. Stet ...
                            </p>
                            <hr />
                        </div>
                        <div className="prj">
                            <b>Project Name </b>
                            <span>(Servee Name)</span>
                            <table>
                                <tr>
                                    <td>Company Name</td>
                                    <td></td>
                                    <td>Designation</td>
                                </tr>
                                <tr>
                                    <td>Join Date/End Date</td>
                                    <td></td>
                                    <td>City</td>
                                </tr>
                            </table>
                            <p>
                                Project Description Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy
                                eirmod tempor invidunt ut accusam et justo
                                duo dolores et ea rebum. Stet ...
                            </p>
                            <hr />
                            <button className="payDetailView" type="button">View All <ExpandMoreIcon style={{ fontSize: '16px', color: '#73b43c' }} /></button>
                        </div>
                    </div>
                    <div className="portfolioSkill">
                        <EditIcon style={{ color: '#0a6b3d', float: 'right' }} />
                        <h3>Skills</h3>
                        <hr/>
                        <b>Abode XD</b>
                        <hr/>
                        <b>HTML</b>
                        <hr/>
                        <b>C#</b>
                        <hr/>
                        <button className="payDetailView" type="button">View All <ExpandMoreIcon style={{ fontSize: '16px', color: '#73b43c' }} /></button>
                    </div>
                    <button className="portfolioUpdate">Update All</button>
                </div>
            </div>
        </>
    )
}