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
            <Navbar_Servee nav='4'/>
            <div className="portfolio">
                <div className="portfolioLft">
                    <h3 className="portfolioHead">My portfolio</h3>
                    <div className="portfolioCover">
                        <button className="upgrade-btn">Upgrade</button>
                    </div>
                    <div className="portfolioName">
                        <EditIcon style={{ color: '#0a6b3d', float: 'right', marginTop: '-30px' }} />
                        <input type="text" placeholder="update phone number" className="portfolio-server-input"></input><br></br>
                        <div>
                            <input type="text" placeholder="Update Email Address" className="portfolio-server-input"></input>
                            <button className="portfolio-server-email-verify">verify</button>
                        </div>
                        <input type="text" placeholder="Add Alternate Phone no" className="portfolio-server-input"></input><br></br>
                        <select name="gender" placeholder="select gender" className="portfolio-server-input">
                            <option value="male">male</option>
                            <option value="female">female</option>
                       </select><br></br>
                        <input type="text" placeholder="Update Address" className="portfolio-server-input"></input><br></br>
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
                    <div className="server-bio-details">
                    <EditIcon style={{ color: '#0a6b3d', float: 'right' }} />
                    <h3>BIO</h3>
                    <hr/>
                    <div >
                        <textarea placeholder="describe yourself" className="bio-textarea"></textarea>
                    </div>
                    </div>
                    <div className="portfolioPast">
                        <EditIcon style={{ color: '#0a6b3d', float: 'right' }} />
                        <h3>Post Projects</h3>
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
                            <button className="payDetailView" type="button">View All <ExpandMoreIcon style={{ fontSize: '16px', color: '#73b43c' }} /></button>
                        </div>
                        {/* <div className="prj">
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
                        </div> */}
                    </div>
                    <div className="portfolioSkill">
                        <EditIcon style={{ color: '#0a6b3d', float: 'right' }} />
                        <h3>Skills</h3>
                        <hr />
                        <b>Abode XD</b>
                        <hr />
                        <b>HTML</b>
                        <hr />
                        <b>C#</b>
                        <hr />
                        <button className="payDetailView" type="button">View All <ExpandMoreIcon style={{ fontSize: '16px', color: '#73b43c' }} /></button>
                    </div>
                    <div >
                        <input type="file" className="cv-upload"></input>
                    </div>
                    <button className="portfolioUpdate">SAVE</button>
                </div>
            </div>
        </>
    )
}