import React from 'react';
import './Proposal.css';
import NavbarProposal from '../../NavbarProposal';

const CreateProposal = () => {
    return (<>
      <NavbarProposal />
      <div className="containerProposals">
         <main className="contMainProposal">
         <section className="headingFServee">
          <h2>Proposals</h2>
        </section>
          <section className="contsecMainProposal">
            
            <form>
            
              <section className="proposal-form">
              
                <div className="proposal-form-left">
                <h4>Place a Bid on this project</h4>
                    <label className="label-proposal">Bid Amount</label><br></br>
                    <input type="number"></input><br></br>
                    <label className="label-proposal">This project will be delivered in</label><br></br>
                    <input type="number"></input><br></br>
                    <h4>Suggest a milestone payment</h4>
                    <input type="text" placeholder="milestone 1" className="milestone"></input>
                    <input type="number"  className="input-milestone"></input><br></br><br></br>
                    <input type="text" placeholder="milestone 2"  className="milestone"></input>
                    <input type="number" className="input-milestone"></input><br></br><br></br>
                    <button className="add-milestone">add another milestone</button>
                </div>
                <div className="proposal-form-right">
                     <label className="textarea-label">Describe your proposal</label><br></br><br></br>
                     <textarea className="proposal-textarea" placeholder="What makes you the best candidate
for this project?"></textarea><br></br><br></br>
                     <button className="create-proposal-btn">Create Proposal</button>
                </div>
              </section>
              
            </form>
          </section>
        </main>
      </div>
      </>
    );
  };
  
  export default CreateProposal;