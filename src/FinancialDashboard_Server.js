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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

/**
 * @author Parth Chaturvedi
 * @version 08-07-21
 */

export default function FinancialDashboardServer() {

    const [transaction, setTransaction] = useState([]);
    const [all, setAll] = useState(true);
    const [withdraw, setWithdraw] = useState(false);
    const [transHistory, setTransactionHistory] = useState(false);
    const url = 'http://localhost:8000/servee/transaction';

    const getTransaction = async () => {
        const response = await fetch(url);
        const history = await response.json();
        setTransaction(history);
    };

    const handleAll = () => {
        setAll(true);
        setTransactionHistory(false);
        setWithdraw(false);
    }

    const handleWithdraw = () => {
        setWithdraw(true);
        setAll(false);
        setTransactionHistory(false);
    }

    const handleTrans = () => {
        setTransactionHistory(true);
        setAll(false);
        setWithdraw(false);
    }

    useEffect(() => {

        $('.tab').on('click', function () {
            $('.active-tab').removeClass('active-tab');
            $(this).addClass('active-tab');
        });

        getTransaction();

    }, [all, withdraw, transHistory])

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
                    <button>Server <AccountBalanceWalletOutlinedIcon style={{ fontSize: '17px' }} /></button>
                </div>
                <div className="PrjServeeTab">
                    <a className="tab active-tab" style={{ paddingLeft: '10px', paddingRight: '10px' }} onClick={handleAll}>All</a>
                    <a className="tab" onClick={handleWithdraw}>Withdraw</a>
                    <a className="tab" onClick={handleTrans}>Transaction History</a>
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
                    <div className="lftsideDash">
                        <h3>Wallet</h3>
                        <div className="balance">
                            <h5>You have in your wallet</h5>
                            <p>4,500.00/-</p>
                            <table className='mnyAdd'>
                                <tr className="head">
                                    <th>Last Added</th>
                                    <th>Date</th>
                                </tr>
                                <tbody>
                                    <tr className="r1">
                                        <td>1,000.00/-</td>
                                        <tr>dd/mm/yyyy</tr>
                                    </tr>
                                    <tr className="r2">
                                        <td>1,500.00/-</td>
                                        <tr>dd/mm/yyyy</tr>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="payDetailView" type="button">View All <ExpandMoreIcon style={{ fontSize: '16px', color: '#73b43c' }} /></button>
                        </div>
                    </div>
                    <div className="rghsideDash">
                        <table className='dashTable'>
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Servee Name</th>
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

            {withdraw &&
                <div className="finanDashboardMain">
                    <div className="lftsideDash">
                        <h3>Wallet</h3>
                        <div className="balance">
                            <h5>You have in your wallet</h5>
                            <p>4,500.00/-</p>
                            <table className='mnyAdd'>
                                <tr className="head">
                                    <th>Last Added</th>
                                    <th>Date</th>
                                </tr>
                                <tbody>
                                    <tr className="r1">
                                        <td>1,000.00/-</td>
                                        <tr>dd/mm/yyyy</tr>
                                    </tr>
                                    <tr className="r2">
                                        <td>1,500.00/-</td>
                                        <tr>dd/mm/yyyy</tr>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="payDetailView" type="button">View All <ExpandMoreIcon style={{ fontSize: '16px', color: '#73b43c' }} /></button>
                        </div>
                    </div>
                    <div className="rghsideDash">
                        <div className="ctnDash">
                            <h3>Wallet Amount</h3>
                            <span>4,500.00/-</span>
                            <p>Withdraw Amount</p>
                            <input type="number" placeholder="Enter amount" />
                            <button>Withdraw</button>
                        </div>
                    </div>
                </div>
            }

            {transHistory &&
                <div className="finanDashboardMain">
                    <div className="lftsideDash">
                        <h3>Wallet</h3>
                        <div className="balance">
                            <h5>You have in your wallet</h5>
                            <p>4,500.00/-</p>
                            <table className='mnyAdd'>
                                <tr className="head">
                                    <th>Last Added</th>
                                    <th>Date</th>
                                </tr>
                                <tbody>
                                    <tr className="r1">
                                        <td>1,000.00/-</td>
                                        <tr>dd/mm/yyyy</tr>
                                    </tr>
                                    <tr className="r2">
                                        <td>1,500.00/-</td>
                                        <tr>dd/mm/yyyy</tr>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="payDetailView" type="button">View All <ExpandMoreIcon style={{ fontSize: '16px', color: '#73b43c' }} /></button>
                        </div>
                    </div>
                    <div className="rghsideDash">
                        <table className='dashTable' style={{fontSize: '0.78rem'}}>
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Transaction</th>
                                    <th>Servee Name/Work</th>
                                    <th>Amount</th>
                                    <th>Date / Time</th>
                                    <th>Remaining</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transaction.map((tran, index) => {

                                    const { name, work, amount, date, time, status } = tran;
                                    const dateTime = date + ' | ' + time;
                                    const pay = amount + '/-';
                                    const nameWork = name + ' & ' + work;

                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{status}</td>
                                            <td>{nameWork}</td>
                                            <td>{pay}</td>
                                            <td>{dateTime}</td>
                                            <td style={{ color: '#66ad4f', fontWeight: 'bold' }}>{pay}</td>
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
        </>
    )
}