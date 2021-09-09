import React from 'react'
import logo from './images/certi-serv-logo.png';
import "../src/components/profile/profile.css"

const ProfileHeader = () => {
    return (
        <nav>
          <div className="profile-logo">
             <img src={logo}></img> 
          </div>  
          <h2>PROFILE DETAILS</h2>
        </nav>
    )
}

export default ProfileHeader