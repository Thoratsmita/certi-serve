import React from 'react';
import './serveeFeedback.css';
import { useState } from 'react';
import StarRating from '../StarRating';

const ServerMainComponent = () => {

  const[serverName, setServerNmae] = useState("--------------")

  return(
    <div className="containerFeedbackServee">
      <main className="contMainFeedback">
        <section className="headingFServee">
          <h2>Leave Feedback</h2>
          <h4>Please leave feedback and rate {serverName} for the project.</h4>
        </section>
        <section className="contsecMainServee">
          <form className="rating-form">
            <div className="ratings">
              <div className='star'>
            <div className="star-rating">
            <label className='rating-label'><b>Clarity in Specification</b></label>
          <StarRating />
          </div>
          <div className="star-rating">
            <label className='rating-label'><b>Communication</b></label>
          <StarRating />
          </div>
          <div className="star-rating">
            <label className='rating-label'><b>Payment Promptness</b></label>
          <StarRating />
          </div>
          <div className="star-rating">
            <label className='rating-label'><b>Professionalism</b></label>
          <StarRating />
          </div>
          <div className="star-rating">
            <label className='rating-label'><b>Would you work for again</b></label>
          <StarRating />
          </div>
          </div>
          </div><br></br>
          <label><b>How was the experience with your employer</b></label><br></br><br></br>
          <label><b>Comment:</b>          (Maximum 1500 characters. This will be public)</label><br></br><br></br>
          <div><textarea className="textarea"></textarea></div>
          </form>
          <button className="rate">Rate Servee</button>
        </section>
        
      </main>
    </div>
  )
};

export default ServerMainComponent;
