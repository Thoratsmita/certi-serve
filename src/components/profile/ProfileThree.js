import React from 'react'
import "./profile.css"
import ProfileHeader from './ProfileHeader'
import { Component } from 'react'
import { Link } from 'react-router-dom';


class ProfileThree extends Component{
    constructor() {
        super();
        this.state = {
          languages: "",
          dob: ""
        };
      }

      handleChangelanguages = evt => {
        this.setState({ languages: evt.target.value });
      };

      handleChangedob = evt => {
        this.setState({ dob: evt.target.value });
      };
      handleSubmit = () => {
        const { languages, dob } = this.state;
      };

    render(){
        const { languages, dob } = this.state;
        const isEnabled = languages.length > 0 && dob.length > 0;
    return(
        <>
        <ProfileHeader />
        <div className="progress-bar">
            <div className="profile-bar-three"></div>
        </div>
        <div className="profile-form-container">
        <form className="profile-form" onSubmit={this.handleSubmit}>
        <h3 className="profile-name-title">What languages do you speak?</h3>
        <p>We will use this to help match you with employers who are fluent in 
these languages</p>
<input type="Text" className="name-input" value={this.state.languages} onChange={this.handleChangelanguages}></input>
<h3 className="profile-name-title">When where you born?</h3>
<p>You need to be atleast 16 years old  to use this website. This information<br></br>
will be used for verification and will be kept confidential.</p>
<input type="date" className="profile-date-input" value={this.state.dob} onChange={this.handleChangedob}></input>
<div className="back-next-btns">
             <button className="back-btn">Back</button>
             <Link to="/profile/four"><button className="next-btn" type="button" disabled={!isEnabled}>Next</button></Link>
             </div>
        </form>
        </div>
        </>
    )}
}

export default ProfileThree