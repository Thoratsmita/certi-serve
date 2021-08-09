import React from 'react';
import './serveeFeedback.css';
const ServerMainComponent = ({ props }) => {
  return (
    <div className="containerFeedbackServee">
      <main className="contMainFeedback">
        <section className="headingFServee">
          <h2>Projects Awaiting Feedback</h2>
        </section>
        <section className="contsecMainServee">
          <h3>Ahh! You have not taken any project!</h3>

          <button className="btnFServee">Find Job</button>
        </section>
      </main>
    </div>
  );
};

export default ServerMainComponent;
