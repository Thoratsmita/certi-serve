import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './App.css';
import logo from './images/certi-serv-logo.png';
import Previews from './Dropzone';


export default function PostProject() {

    const [projectName, setProjectName] = useState('');
    const [projectDescrp, setProjectDescrp] = useState(''); 
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {

        $('#projectdescription').on('input', function () {
            $('#count').text(4000 - $(this).val().length);
        });     
    })

    return (
        <div className="PostPrj">
            <div className="PostPrjLogo">
                <img src={logo} alt="Certi-Serv Logo" />
            </div>
            <div className="PostPrjTxt">
                <h1>Tell us what you need done</h1>
                <p>Contact skilled freelancers within minutues. View profiles, ratings, portfolios and chat with them. Pay the freelancer
                    only when you are 100% satisfed with their work.</p>
            </div>
            <form className="PostPrjForm" onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="projectname">Choose a name for your project</label>
                <input
                    type="text"
                    name="projectname"
                    id="projectname"
                    placeholder="e.g. Build me a website"
                    onChange={(e) => setProjectName(e.target.value)}
                    required
                />
                <label htmlFor="projectdescription">Tell us more about your project</label>
                <p>Start with a bit about yourself or your business, and include an overview of what you need done.</p>
                <textarea
                    rows="4"
                    cols="25"
                    name="projectdescription"
                    id="projectdescription"
                    maxLength="4000"
                    placeholder="Describe your project here"
                    onChange={(e) => setProjectDescrp(e.target.value)}
                    required
                />
                <div className="wordcount"><span id="count">4000</span> characters remaining</div>
                <div className="formfile">
                    <Previews/>                
                </div>
                {/* <span id="fileError"></span> */}
                <button type="submit" className="postPrjBtn">Post Project</button>
            </form>
            <div style={{height: '30px'}}></div>
        </div>
    )
}
