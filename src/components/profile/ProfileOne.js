import React from 'react'
import "./profile.css"
import ProfileHeader from '../../ProfileHeader';
import { Component } from 'react'
import { Link } from 'react-router-dom';
import {IoCameraOutline} from "react-icons/io5";


class ProfileOne extends Component {

    constructor() {
        super();
        this.state = {
          fname: "",
          lname: "",
          profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        };
      }

      imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };

      handleChangefname = evt => {
        this.setState({ fname: evt.target.value });
      };

      handleChangelname = evt => {
        this.setState({ lname: evt.target.value });
      };
      handleSubmit = () => {
        const { fname, lname } = this.state;
      };

    render(){
        const { fname, lname, profileImg } = this.state;
        const isEnabled = fname.length > 0 && lname.length > 0;

    return (<>
        <ProfileHeader />
        <div className="progress-bar">
            <div className="profile-bar-one"></div>
        </div>
        <div className="profile-form-container">
        <form className="profile-form" onSubmit={this.handleSubmit}>
           <div className="img-holder">
				<img src={profileImg} alt="" id="img" className="img" />
		  </div>
		  <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} className="profile-img"/>
          <div className="label">
          <label className="image-upload" htmlFor="input">
						<IoCameraOutline className="cam-icon" />
					</label>
          </div>
            {/* <input type="file" className="image-upload"></input> */}
            <h3 className="profile-name-title">What is your name?</h3>
            <p>Please use your real name as this will be required for identity verification.</p>
             <label className="profile-label-name">First Name</label><br></br>
             <input type="text" placeholder="enter your first name here" className="name-input" value={this.state.fname} onChange={this.handleChangefname}></input><br></br>
             <label className="profile-label-name">Last Name</label><br></br>
             <input type="text" placeholder="enter your Last name here" className="name-input" value={this.state.lname} onChange={this.handleChangelname}></input><b3></b3>
             <div className="back-next-btns">
             <button className="back-btn">Back</button>
             <Link to="/profile/two"><button className="next-btn" type="button" disabled={!isEnabled}>Next</button></Link>
             </div>
        </form>
        </div>
        </>
    )}
}

export default ProfileOne