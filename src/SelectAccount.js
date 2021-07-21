import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from './images/certi-serv-logo.png';
import backIcon from './images/User_type_icons/dashicons_arrow-left-alt2.png';
import rightArrow from './images/User_type_icons/bi_arrow-right.png';
import server from './images/User_type_icons/fa-solid_user-tie.png';
import servee from './images/User_type_icons/raphael_user.png';

/**
 * @author Parth Chaturvedi
 * @version 20-07-21
 */

export default function SelectAction() {

    return (
        <>
            <div className="selectAction">
                <div className="selectCointainer">
                    <img src={backIcon} alt="back icon"/>
                    <img  className="selectActionLogo" src={logo} alt="CertiServLogo"/>
                    <h3>Select account type</h3>
                    <p>Don't worry, this can be changed later.</p>
                    <div className="selectActionBtnGr">
                        <Link to="/servee" className="selectActionBtn">
                            <img className="selectActionIco" src={server} alt="Server logo"/>
                            <div className="selectActionTxt">
                                <h2>Servee</h2>
                                <p>I want to work</p>
                            </div>
                            <img className="selectActionArr" src={rightArrow} alt="Right Arrow"/>
                        </Link>
                        <Link to="/server" className="selectActionBtn">
                            <img className="selectActionIco" src={servee} alt="Servee logo"/>
                            <div className="selectActionTxt">
                                <h2>Server</h2>
                                <p>I want to hire</p>
                            </div>
                            <img className="selectActionArr" src={rightArrow} alt="Right Arrow"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}