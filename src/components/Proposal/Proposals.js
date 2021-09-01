import React from 'react';
import './Proposal.css';
import NavbarProposal from '../../NavbarProposal';
import { Link } from 'react-router-dom';

const Proposals = () => {
  return (<>
    <NavbarProposal />
    <div className="containerProposals">
       <main className="contMainProposal">
        <section className="contsecMainProposal">
          <h3>Ahh you have not created any proposals!!</h3>
          <Link to="/proposals/create"><button className="btnFProposal">Create a proposal</button></Link>
        </section>
      </main>
    </div>
    </>
  );
};

export default Proposals;