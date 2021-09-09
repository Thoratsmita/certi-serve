import React from 'react'
import "./profile.css"
import ProfileHeader from '../../ProfileHeader';
import { Component } from 'react'
import { Link } from 'react-router-dom';

class ProfileTwo extends Component {
    constructor() {
        super();
        this.state = {
          wdyd: "",
          describe: ""
        };
      }

      handleChangewdyd = evt => {
        this.setState({ wdyd: evt.target.value });
      };

      handleChangedescribe = evt => {
        this.setState({ describe: evt.target.value });
      };
      handleSubmit = () => {
        const { wdyd, describe } = this.state;
      };

    render(){
        const { wdyd, describe } = this.state;
        const isEnabled = wdyd.length > 0 && describe.length > 0;
    return (<>
        <ProfileHeader />
        <div className="progress-bar">
            <div className="profile-bar-two"></div>
        </div>
        <div className="profile-form-container">
        <form className="profile-form" onSubmit={this.handleSubmit}>
            <h3 className="profile-name-title">Tell us a bit about yourself</h3>
            <p>Fill out your profile for clients to better understand your services</p>
            <h3 className="profile-name-title">What do you do?</h3>
            <p>What do you do?</p>
            <input type="text" className="name-input" value={this.state.wdyd} onChange={this.handleChangewdyd}></input>
            <h3 className="profile-name-title">Describe yourself</h3>
            <textarea className="profile-textarea" value={this.state.describe} onChange={this.handleChangedescribe}></textarea>
            <div className="back-next-btns">
             <button className="back-btn">Back</button>
             <Link to="/profile/three"><button className="next-btn" type="button" disabled={!isEnabled}>Next</button></Link>
             </div>
        </form>
        </div>
        </>
        )}
}
 
 
export default ProfileTwo