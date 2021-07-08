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
import DoneIcon from '@material-ui/icons/Done';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function FinancialDashboardServee() {

    const [transaction, setTransaction] = useState([]);
    const [all, setAll] = useState(true);
    const [transHistory, setTransactionHistory] = useState(false);
    const url = 'http://localhost:8000/servee/transaction';

    const getTransaction = async () => {
        const response = await fetch(url);
        const history = await response.json();
        setTransaction(history);
    };

    const allTab = () => {
        setAll(true);
        setTransactionHistory(false);
    }

    const transacHisTab = () => {
        setAll(false);
        setTransactionHistory(true);
    }

    useEffect(() => {

        $('.tab').on('click', function () {
            $('.active-tab').removeClass('active-tab');
            $(this).addClass('active-tab');
        });

        $('.payInfoOut').on('click', function () {
            $('.selectPay').removeClass('selectPay');
            $('.selectPayCir').removeClass('selectPayCir');
            $('#doneIcon').css('display', 'none');
            $(this).addClass('selectPay');
            $(this).children('.payCrl').addClass('selectPayCir');
            $(this).children('.payCrl').children('#doneIcon').css('display', 'block');
        })

        getTransaction();

    }, [all, transHistory])

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
            <div className="finanDashboardHead">
                <div className="PrjServeeHead">
                    <h1>Financial Dashboard</h1>
                    <button>Servee <AccountBalanceWalletOutlinedIcon style={{ fontSize: '17px' }} /></button>
                </div>
                <div className="PrjServeeTab">
                    <a className="tab active-tab" style={{ paddingLeft: '10px', paddingRight: '10px' }} onClick={allTab}>All</a>
                    <a className="tab" onClick={transacHisTab} >Transaction History</a>
                </div>
                <form className="PrjServeeForm">
                    <input type="text" name="search" placeholder="Search Transaction" />
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
            </div>
            {all &&
                <div className="finanDashboardMain">
                    <div className="dashLeftSide">
                        <h3>Payment Methods</h3>
                        <div className="dashMainBtn">
                            <button className="dashSideSlt">Card</button>
                            <button>NetBanking</button>
                            <button>Other</button>
                        </div>
                        <div className="payInfo">
                            <div className="payInfoOut selectPay">
                                <div className="innerBox"></div>
                                <div className="payDetails">
                                    <span select="selectPayNum" id="payDetailNum">12**88</span>
                                    <span id="payDetailCmp">Master Card</span>
                                </div>
                                <div className="payCrl selectPayCir"><DoneIcon id='doneIcon' style={{ color: '#ffffff' }} /></div>
                            </div>

                            <div className="payInfoOut">
                                <div className="innerBox"></div>
                                <div className="payDetails">
                                    <span select="selectPayNum" id="payDetailNum">12**88</span>
                                    <span id="payDetailCmp">Master Card</span>
                                </div>
                                <div className="payCrl"><DoneIcon id='doneIcon' style={{ color: '#ffffff', display: 'none' }} /></div>
                            </div>

                            <div className="payInfoOut">
                                <div className="innerBox"></div>
                                <div className="payDetails">
                                    <span select="selectPayNum" id="payDetailNum">12**88</span>
                                    <span id="payDetailCmp">Master Card</span>
                                </div>
                                <div className="payCrl"><DoneIcon id='doneIcon' style={{ color: '#ffffff', display: 'none' }} /></div>
                            </div>

                            <button className="payDetailView" type="button">View All <ExpandMoreIcon style={{ fontSize: '16px', color: '#73b43c' }} /></button>

                            <button className="payDetailAdd" type="button">Add New <AddIcon style={{ fontSize: '16px' }} /></button>
                        </div>
                    </div>
                    <div className="dashRightSide">
                        <table className='dashTable'>
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Server Name</th>
                                    <th>Work</th>
                                    <th>Amount</th>
                                    <th>Date / Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transaction.map((tran, index) => {

                                    const { name, work, amount, date, time, status } = tran;
                                    const dateTime = date + ' | ' + time;
                                    const pay = amount + '/-';

                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{name}</td>
                                            <td>{work}</td>
                                            <td>{pay}</td>
                                            <td>{dateTime}</td>
                                            <td style={{ color: '#66ad4f', fontWeight: 'bold' }}>{status}</td>
                                        </tr>
                                    )

                                })}
                            </tbody>
                        </table>
                        <div className="dashIcon">
                            <ChevronRightIcon />
                        </div>
                        <div className="dashIcon">
                            <ChevronLeftIcon />
                        </div>
                    </div>
                </div>
            }

            {transHistory &&
                <div className="traHis">
                    <table className='dashTable'>
                        <thead>
                            <tr>
                                <th>Sr No.</th>
                                <th>Server Name</th>
                                <th>Work</th>
                                <th>Amount</th>
                                <th>Date / Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transaction.map((tran, index) => {

                                const { name, work, amount, date, time, status } = tran;
                                const dateTime = date + ' | ' + time;
                                const pay = amount + '/-';

                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{name}</td>
                                        <td>{work}</td>
                                        <td>{pay}</td>
                                        <td>{dateTime}</td>
                                        <td style={{ color: '#66ad4f', fontWeight: 'bold' }}>{status}</td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                    <div className="dashIcon">
                        <ChevronRightIcon />
                    </div>
                    <div className="dashIcon">
                        <ChevronLeftIcon />
                    </div>
                </div>
            }
        </>
    )
}