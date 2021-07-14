import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './App.css';
import logo from './images/certi-serv-logo.png';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

/**
 * @author Parth Chaturvedi
 * @version 08-07-21
 */

export default function portfolio() {

    return (
        <>
            <div className="finanDashboard">
                <img src={logo} alt="Certi Serve Logo" />
                <div className="findJobHeadNav">
                    <div className="findJobIcon"><ExploreOutlinedIcon style={{ fontSize: '18px' }} /> Browse</div>
                    <div className="findJobIcon"><LocalMallOutlinedIcon style={{ fontSize: '18px' }} /> My Projects</div>
                </div>
                <div className="findJobSidebar">
                    <NotificationsNoneOutlinedIcon className="notifiction" style={{ marginRight: '30px' }} />
                    <ChatBubbleOutlineOutlinedIcon className="chatbubble" style={{ marginRight: '30px' }} />
                    <div className="findJobBox">
                        <PersonOutlineOutlinedIcon style={{ border: '2px solid black', fontSize: '35px', marginRight: '15px' }} />
                        <span id='findJobProfile'>@xyz  </span>
                        <span id='findJobAcc'>000.00 INR</span>
                    </div>
                </div>
            </div>
        </>
    )
}