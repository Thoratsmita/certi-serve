import React from 'react'
import "./profile.css"
import ProfileHeader from '../../ProfileHeader';
import { Component } from 'react'
import { Link } from 'react-router-dom';

class ProfileFour extends Component {
    constructor() {
        super();
        this.state = {
          address: "",
          city: "",
          state: "",
          pincode: "",
          country: "",
        };
      }

      handleChangeaddress = evt => {
        this.setState({ address: evt.target.value });
      };

      handleChangecity = evt => {
        this.setState({ city: evt.target.value });
      };
      handleChangestate = evt => {
        this.setState({ state: evt.target.value });
      };
      handleChangepincode = evt => {
        this.setState({ pincode: evt.target.value });
      };
      handleChangecountry = evt => {
        this.setState({ country: evt.target.value });
      };
      handleSubmit = () => {
        const { address, city, state, pincode, country } = this.state;
      };

    render(){
        const { address, city, state, pincode, country } = this.state;
        const isEnabled = address.length > 0 && city.length > 0 && state.length > 0 && pincode.length > 0 && country.length > 0;
    return (<>
        <ProfileHeader />
        <div className="progress-bar">
            <div className="profile-bar-four"></div>
        </div>
        <div className="profile-form-container">
        <form className="profile-form" onSubmit={this.handleSubmit}>
        <h3 className="profile-name-title">Where are you located?</h3>
        <p>Please use your real address as this will be required for identity verification.<br></br>
        Only your city and country will be show publicly.</p>
        <label className="profile-label-name" >Address</label><br></br>
        <input type="text" placeholder="enter your address here" className="address-input" value={this.state.address} onChange={this.handleChangeaddress}></input><br></br>
        <label className="profile-label-name">City</label><br></br>
        <input type="text" placeholder="enter your City here" className="address-input" value={this.state.city} onChange={this.handleChangecity}></input><br></br>
        <div className="state-pincode">
            <div className="state">
            <label className="profile-label-name">State/Province</label><br></br>
            <input type="text" className="state-pincode-input" placeholder="state/province" value={this.state.state} onChange={this.handleChangestate}></input>
            </div>
            <div className="pincode">
            <label className="profile-label-name">Pincode</label><br></br>
            <input type="text" className="state-pincode-input" placeholder="pincode" value={this.state.pincode} onChange={this.handleChangepincode}></input>
            </div>
        </div>
        <label className="profile-label-name">Country</label><br></br>
        <input type="text" placeholder="enter your Country here" className="address-input" value={this.state.country} onChange={this.handleChangecountry}></input><br></br>
        <div className="back-next-btns">
             <button className="back-btn">Back</button>
             <Link to="/"><button className="next-btn" type="button" disabled={!isEnabled}>Next</button></Link>
             </div>
        </form>
        </div>
        </>
        )}
    }

 export default ProfileFour   