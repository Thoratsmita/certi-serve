import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './App.css';
import logo from './images/certi-serv-logo.png';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import TuneIcon from '@material-ui/icons/Tune';
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import LastPageIcon from '@material-ui/icons/LastPage';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

export default function FindJob() {

    const [search, setSearch] = useState('');
    const [jobs, setJobs] = useState([]);
    const [jobsOb, setJobsOb] = useState();
    const [resultNo, setResultNo] = useState(0);
    const url = 'http://localhost:8000/api/';

    const handleFilter = () => {
        $('.findJobPopUpOverlay').css('display', 'inline');
    }

    const handleFilterClose = () => {
        $('.findJobPopUpOverlay').css('display', 'none');
    }

    const getJobs = async () => {
        $('.jobResults').css('display', 'flex');
        $('.jobResultsSingle').css('display', 'none');
        const response = await fetch(url);
        const jobsRes = await response.json();
        setJobs(jobsRes);
        setJobsOb({});
        setResultNo(jobsRes.length);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        $('.findJobPopUpOverlay').css('display', 'none');
        $('.jobResultsSingle').css('display', 'flex');
        $('.jobResults').css('display', 'none');
        const response = await fetch(url + search);
        const jobsRes = await response.json();
        setJobsOb(jobsRes);
        setJobs([]);
        setResultNo(1);
    }

    useEffect(() => {
        getJobs();
    }, [])


    return (
        <>
            <div className="findJob">
                
                <div className="findJobHead">
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

                <div className="findJobBanner">
                    <div className="findJobBannerText">
                        <span>INTRODUCING</span>
                        <p>NEW JOBS</p>
                    </div>
                    <div className="findJobBannerBtn">
                        <button type="button" className="bannerBtn selectbtn">I want to hire</button>
                        <button type="button" className="bannerBtn unselectbtn">I want to work</button>
                    </div>
                </div>

                <form className="findJobSearch" onSubmit={(e) => handleSearch(e)}>
                    <input type="text" className="findJobSearchBar" placeholder="Search Keyword" onChange={(e) => setSearch(e.target.value)} required />
                    <TuneIcon style={{ marginLeft: '-50px', cursor: 'pointer' }} onClick={handleFilter} />
                    
                    <div className="findJobPopUpOverlay">
                        <div className="findJobPopUp">
                            <div className="findJobPopUpHead">
                                <h3>Filter</h3>
                                <CloseIcon style={{ float: 'right', cursor: 'pointer' }} onClick={handleFilterClose} />
                            </div>
                            <hr style={{ margin: '20px 0' }} />

                            <label className="findJobLabel" htmlFor="location">Job Location</label>
                            <input type="text" className="findJobInput" name="location" id="location" />
                            <label className="findJobLabel" htmlFor="skills">Skills</label>
                            <input type="text" className="findJobInput" name="skills" id="skills" />
                            <label className="findJobLabel" htmlFor="resources">Resourses</label>
                            <input type="text" className="findJobInput" name="resources" id="resources" />
                            <label className="findJobLabel" htmlFor="keyword">Keywords</label>
                            <input type="text" className="findJobInput" name="keyword" id="keyword" />
                            <label className="findJobLabel" htmlFor="language">Language</label>
                            <input type="text" className="findJobInput" name="language" id="language" />

                            <label className="findJobLabelCheck">
                                <input type="checkbox" />
                                Active Jobs
                            </label>

                            <button type="submit" className="filterBtn">Apply</button>
                        </div>

                    </div>

                </form>
                
                <div className="findJobResult">
                    <div className="findJobResultFilter">
                        <h2>Filter By:</h2>
                        <hr style={{ color: '#8b8b8b' }} />
                        <h5>Budget</h5>
                        <form className="findJobFilter">
                            <label>
                                <input type="checkbox" style={{ marginRight: '15px' }} />
                                Fixed Price Projects
                            </label>
                            <div>
                                <select name="prjPriceleft" id="prjPriceleft">
                                    <option value="min">min</option>
                                    <option value="max">max</option>
                                </select>
                                <span>to</span>
                                <select name="prjPriceright" id="prjPriceright">
                                    <option value="max">max</option>
                                    <option value="min">min</option>
                                </select>
                            </div>
                            <label className="">
                                <input type="checkbox" style={{ marginRight: '15px' }} />
                                Project Duration
                            </label>
                            <div>
                                <select name="prjDurleft" id="prjDurleft">
                                    <option value="min">min</option>
                                    <option value="max">max</option>
                                </select>
                                <span>to</span>
                                <select name="prjDurright" id="prjDurright">
                                    <option value="max">max</option>
                                    <option value="min">min</option>
                                </select>
                            </div>
                            <label className="">
                                <input type="checkbox" style={{ marginRight: '15px' }} />
                                Working Hours
                            </label>
                            <div>
                                <select name="prjHrsleft" id="prjPrice">
                                    <option value="min">min</option>
                                    <option value="max">max</option>
                                </select>
                                <span>to</span>
                                <select name="prjPrice" id="prjPrice">
                                    <option value="max">max</option>
                                    <option value="min">min</option>
                                </select>
                            </div>
                            <button id="sideFilterBtn" type="submit">Apply</button>
                        </form>
                    </div>

                    <div className="findJobResultFilterDisplay">

                        <div className="filterDisplayHead">

                            <select name="postDate" id="postDate">
                                <option value="new">Newest First</option>
                                <option value="old">Oldest First</option>
                            </select>

                            <span id="resultNum">{resultNo} jobs found</span>

                            <div className="filterDisplayBtnGrp">
                                <button id="filterLstBtn" type="button"><FirstPageIcon style={{ fontSize: '10px' }} /></button>
                                <button type="button"><ChevronLeftIcon style={{ fontSize: '10px' }} /></button>
                                <button className="filterbtnSelect" type="button" style={{ fontSize: '13px', backgroundColor: '#0fc80b' }}>1</button>
                                <button type="button" style={{ fontSize: '13px' }}>2</button>
                                <button type="button" style={{ fontSize: '13px' }}>3</button>
                                <button type="button"><ChevronRightIcon style={{ fontSize: '10px' }} /></button>
                                <button id="filterFstBtn" type="button"><LastPageIcon style={{ fontSize: '10px' }} /></button>
                            </div>

                        </div>
                        
                        <hr style={{ color: '#ccc' }} />                        
                        
                    </div>

                    <div className="findJobResultFilterDisplay">

                        <div className="filterDisplayHead">

                            <select name="postDate" id="postDate">
                                <option value="new">Newest First</option>
                                <option value="old">Oldest First</option>
                            </select>

                            <span id="resultNum">{resultNo} jobs found</span>
                            
                            <div className="filterDisplayBtnGrp">
                                <button id="filterLstBtn" type="button"><FirstPageIcon style={{ fontSize: '10px' }} /></button>
                                <button type="button"><ChevronLeftIcon style={{ fontSize: '10px' }} /></button>
                                <button className="filterbtnSelect" type="button" style={{ fontSize: '13px', backgroundColor: '#0fc80b' }}>1</button>
                                <button type="button" style={{ fontSize: '13px' }}>2</button>
                                <button type="button" style={{ fontSize: '13px' }}>3</button>
                                <button type="button"><ChevronRightIcon style={{ fontSize: '10px' }} /></button>
                                <button id="filterFstBtn" type="button"><LastPageIcon style={{ fontSize: '10px' }} /></button>
                            </div>
                            
                        </div>

                        <hr style={{ color: '#ccc' }} />
                    
                        {jobs.map((job) => {
                            const { title, description, bid, days, skills } = job;
                            return (
                                <div className="jobResults">
                                    <div className="jobs">
                                        <div className="jobResultsMain">
                                            <div className="jobResultsHead">
                                                <h3>{title}</h3>
                                                <span>{days} days left</span>
                                            </div>
                                            <div className="jobResultsDes">
                                                <p>{description}</p>
                                                <b>Skills Required:</b>
                                                {skills.map((skill) => {
                                                    return (
                                                        <span className="skillNeeded">{skill}</span>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jobResultsSide">
                                        <span>$ {bid} - Avg Bid</span>
                                        <div style={{ color: '#229548', marginTop: '10px' }}><VerifiedUserIcon style={{ fontSize: '16px' }} /> - Verified</div>
                                    </div>
                                </div>
                            )
                        })}

                        {jobsOb &&
                            <div className="jobResultsSingle">
                                <div className="jobs">
                                    <div className="jobResultsMain">
                                        <div className="jobResultsHead">
                                            <h3>{jobsOb.title}</h3>
                                            <span>{jobsOb.days} days left</span>
                                        </div>
                                        <div className="jobResultsDes">
                                            <p>{jobsOb.description}</p>
                                            <b>Skills Required:</b>
                                            <span className="skillNeeded" >{jobsOb.skills}</span>                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="jobResultsSide">
                                    <span>$ {jobsOb.bid} - Avg Bid</span>
                                    <div style={{ color: '#229548', marginTop: '10px' }}><VerifiedUserIcon style={{ fontSize: '16px' }} /> - Verified</div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}