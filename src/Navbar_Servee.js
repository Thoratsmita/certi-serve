import React, { useEffect } from 'react';
import './App.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

/**
 * @author Parth Chaturvedi
 * @version 22-06-21
 */

export default function Navbar_Servee(props) {
  useEffect(() => {
    switch (props.nav) {
      case '1':
        $('#project').addClass('active-link');
        break;
      case '2':
        $('#dashboard').addClass('active-link');
        break;
      case '3':
        $('#inbox').addClass('active-link');
        break;
      case '4':
        $('#portfolio').addClass('active-link');
        break;
      case '4':
        $('#Feedback').addClass('active-link');
        break;
    }
  });

  return (
    <div className="Navbar">
      <div className="leftside">
        <div className="links">
          <Link id="project" to="/servee/projects" className="nav-link">
            My Project
          </Link>
          <Link
            id="dashboard"
            to="/servee/financialdashboard"
            className="nav-link"
          >
            Dashboard
          </Link>
          <Link id="inbox" to="/inbox" className="nav-link">
            Inbox
          </Link>
          <Link id="portfolio" to="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link id="feedback" to="/servee/feedback" className="nav-link">
            Feedback
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
