import React from 'react';
import './Proposal.css';
import NavbarProposal from '../../NavbarProposal';

const Proposals = () => {
  return (<>
    <NavbarProposal />
    <div className="containerProposals">
       <main className="contMainProposal">
        <section className="contsecMainProposal">
          <h3>Ahh you have not created any proposals!!</h3>
          <button className="btnFProposal">Create a proposal</button>
        </section>
      </main>
    </div>
    </>
  );
};

export default Proposals;