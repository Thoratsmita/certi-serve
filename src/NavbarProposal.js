import React, { useEffect } from 'react';
import './App.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

export default function NavbarProposal(props) {
    useEffect(() => {
      switch (props.nav) {
        case '1':
          $('#details').addClass('active-link');
          break;
        case '2':
          $('#allproposals').addClass('active-link');
          break;
        case '3':
          $('#yourproposals').addClass('active-link');
          break;
        case '4':
          $('#management').addClass('active-link');
          break;
      }
    });
  
    return (
        <div className="Navbar">
          <div className="leftside">
            <div className="links">
              <Link id="details" to="/" className="nav-link">
                Details
              </Link>
              <Link
                id="allproposals"
                to="/"
                className="nav-link"
              >
                All proposals
              </Link>
              <Link id="yourproposals" to="/proposals" className="nav-link">
                Your Proposals
              </Link>
              <Link id="management" to="/" className="nav-link">
                Management
              </Link>
            </div>
          </div>
          <div className="rightside">
            <PersonOutlineOutlinedIcon
              style={{
                color: '#ffffff',
                borderRadius: '50%',
                border: '2px solid #a1f6a5',
                fontSize: '28px',
              }}
            />
            <div className="rightName">
              <span>Lorem Ipsum</span>
              <div>@0.00 INR</div>
            </div>
          </div>
        </div>
      );
    }
    