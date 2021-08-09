import React from 'react';
import './serveeFeedback.css';
const ServeeMainComponent = () => {
  return (
    <div className="containerFeedbackServee">
      <main className="contMainFeedback">
        <section className="headingFServee">
          <h2>Projects Awaiting Feedback</h2>
        </section>
        <section className="contsecMainServee">
          <h3>You have not posted any job!</h3>
          <button className="btnFServee">Post a job</button>
        </section>
      </main>
    </div>
  );
};

export default ServeeMainComponent;
