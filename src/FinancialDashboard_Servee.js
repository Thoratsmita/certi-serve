import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar_Servee from './Navbar_Servee';

/**
 * @author Parth Chaturvedi
 * @version 08-07-21
 */

export default function FinancialDashboardServee() {

    const [transHistory, setTransactionHistory] = useState([]);
    const url = 'http://localhost:8000/servee/transaction';

    const getTransaction = async () => {
        const response = await fetch(url);
        const history = await response.json();
        setTransactionHistory(history);
    };

    useEffect(() => {

        getTransaction();

    }, [])

    return (
        <>
            <Navbar_Servee nav='2' />
            <div class='finanDash'>
                <h2>Financial Dashboard</h2>
                <div class='finanDashCont'>
                    <div class='finanDashWall'>
                        <h2>Wallet</h2>
                        <div class='finanDashBox1'>
                            <h3>Your Balance</h3>
                            <h2>4,500.00 /-</h2>
                            <h3>Your Spending</h3>
                            <h2>5,000.00 /-</h2>
                            <div class='finanDashBoxBtn'>
                                <button type='button' class='finanDashAddFunds'>Add Fund</button>
                                <button type='button' class='finanDashWidthdraw'>Withdraw</button>
                            </div>
                            <div class='finanDashCards'>
                                <h3>Saved</h3>
                                <div class='finanDashCard'>
                                    <h3>Master Card</h3>
                                    <span>1234</span>
                                </div>
                                <div class='finanDashCard'>
                                    <h3>Master Card</h3>
                                    <span>1234</span>
                                </div>
                                <div class='finanDashCard'>
                                    <h3>Master Card</h3>
                                    <span>1234</span>
                                </div>
                                <button type='button' className='addCard'>Add Card</button>
                            </div>
                        </div>
                    </div>
                    <div class='finanDashTrans'>
                        <h2>Transaction History</h2>
                        <div class='finanDashBox2'>
                            <table className='dashTable'>
                                <thead>
                                    <tr>
                                        <th>Transaction ID</th>
                                        <th>Project Name</th>
                                        <th>Transaction</th>
                                        <th>Amount</th>
                                        <th>Date/Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td id='transacId'>id</td>
                                        <td>Name</td>
                                        <td>Credited</td>
                                        <td>00.00/-</td>
                                        <td>Date/Time</td>
                                    </tr>
                                    <tr>
                                       <td id='transacId'>id</td>
                                       <td>Name</td>
                                       <td>Credited</td>
                                       <td>00.00/-</td>
                                       <td>Date/Time</td>
                                   </tr>
                                   <tr>
                                       <td id='transacId'>id</td>
                                       <td>Name</td>
                                       <td>Credited</td>
                                       <td>00.00/-</td>
                                       <td>Date/Time</td>
                                   </tr>
                                   <tr>
                                       <td id='transacId'>id</td>
                                       <td>Name</td>
                                       <td>Credited</td>
                                       <td>00.00/-</td>
                                       <td>Date/Time</td>
                                   </tr>
                                   <tr>
                                       <td id='transacId'>id</td>
                                       <td>Name</td>
                                       <td>Credited</td>
                                       <td>00.00/-</td>
                                       <td>Date/Time</td>
                                   </tr>
                                </tbody>
                            </table>
                            <div class='dashPages'>
                                <button class='nextBtn'>&lt;</button>
                                <button class='nextBtn'>&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}