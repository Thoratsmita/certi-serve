import React from 'react';
import './serveeFeedback.css';
import { useState } from 'react';
import StarRating from '../StarRating';

const ServeeMainComponent = () => {
  // return (
  //   <div className="containerFeedbackServee">
  //     <main className="contMainFeedback">
  //       <section className="headingFServee">
  //         <h2>Leave Feedback</h2>
  //         <h4>Please leave feedback and rate for the project.</h4>
  //       </section>
  //       <section className="contsecMainServee">
  //         <h3>You have not posted any job!</h3>
  //         <button className="btnFServee">Post  job</button>
  //       </section>
  //     </main>
  //   </div>
  // );

  const[serveeName,setServeeName] = useState("----")

  return(
    <div className="containerFeedbackServee">
      <main className="contMainFeedback">
        <section className="headingFServee">
          <h2>Leave Feedback</h2>
          <h4>Please leave feedback and rate {serveeName} for the project.</h4>
        </section>
        <section className="contsecMainServee">
          <form className="rating-form">
            <div className="ratings">
              <div className='star'>
            <div className="star-rating">
            <label className='rating-label'><b>Quality</b></label>
          <StarRating />
          </div>
          <div className="star-rating">
            <label className='rating-label'><b>Communication</b></label>
          <StarRating />
          </div>
          <div className="star-rating">
            <label className='rating-label'><b>Expertise</b></label>
          <StarRating />
          </div>
          <div className="star-rating">
            <label className='rating-label'><b>Professionalism</b></label>
          <StarRating />
          </div>
          <div className="star-rating">
            <label className='rating-label'><b>Would you hire again</b></label>
          <StarRating />
          </div>
          </div>
          <div className="choose">
            <label><b>was this delivered on budget</b></label><br></br><br></br>
            <input type="radio" id="yes" value="yes" name="budget"></input>
            <label for="html">Yes</label>
            <input type="radio" id="no" value="no"  name="budget"></input>
            <label for="html">No</label><br></br><br></br>
            <label><b>was this delivered on time</b></label><br></br><br></br>
            <input type="radio" id="yes" value="yes" name="time"></input>
            <label for="html">Yes</label>
            <input type="radio" id="no" value="no" name="time"></input>
            <label for="html">No</label><br></br>
          </div>
          </div><br></br>
          <label><b>Did your server do a good job?</b></label>
          <p>Help _______ win their next project telling everyone a little bit aboutit. Longer reviews gives other employers the confidence to hire 
good Servers, like _______, and helps to ensure that employers like you continue to receive nothing but the best quality of work.</p>
          <label><b>Comment:</b>          (Maximum 1500 characters. This will be public)</label><br></br><br></br>
          <div><textarea className="textarea"></textarea></div>
          </form>
          <button className="rate">Rate Server</button>
        </section>
        
      </main>
    </div>
  )
};

export default ServeeMainComponent;
