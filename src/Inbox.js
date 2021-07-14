import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './App.css';
import logo from './images/certi-serv-logo.png';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AttachmentOutlinedIcon from '@material-ui/icons/AttachmentOutlined';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

/**
 * @author Parth Chaturvedi
 * @version 14-07-21
 */

export default function Inbox() {

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
            <div className="inbox">
                <div className="chat">
                    <input type="text" id="people" placeholder="| Search for people" />
                    <ul>
                        <li>Active</li>
                        <li>Unread(0)</li>
                        <li>Support</li>
                        <li>Archived</li>
                    </ul>
                    <hr style={{ width: '100%', margin: '0' }} />
                    <div className="chats">
                        <div className="chatbox">
                            <PersonOutlineOutlinedIcon style={{ border: '2px solid #22b810', borderRadius: '50%', display: 'inline', float: 'left' }} />
                            <div className="chatDetail">
                                <span>Lorem Ipsum</span>
                                <p>How are you?</p>
                            </div>
                            <div className="chatTime">
                                {/* <span id='notifiction'>1</span> */}
                                <span id='time'>12:30 PM</span>
                            </div>
                        </div>
                        <div className="chatbox">
                            <PersonOutlineOutlinedIcon style={{ border: '2px solid #22b810', borderRadius: '50%', display: 'inline', float: 'left' }} />
                            <div className="chatDetail">
                                <span>Lorem Ipsum</span>
                                <p>hello</p>
                            </div>
                            <div className="chatTime">
                                <span id='notifiction'>1</span>
                                <span id='time'>5:40 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="message">
                    <div className="messageInput">
                        <AttachmentOutlinedIcon style={{ marginRight: '12px' }} />
                        <EmojiEmotionsOutlinedIcon style={{ marginRight: '12px' }} />
                        <input type="text" placeholder="Type a message" />
                        <DoubleArrowIcon style={{ color: '#056839' }} />
                    </div>
                    <div className="messageSend">
                        <div className="reciever">How are you?</div>
                        <div className="sender">How are you?</div>
                    </div>
                </div>
            </div>
        </>
    )
}