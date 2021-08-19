import React, { useState } from 'react';

import Navbar_Servee from '../../../Navbar_Servee';
import MainComponent from './ServerMainComponent';
import MainComponentProject from './ServerMainComponentProject';

const ServerFeedback = () => {
  const [project, setProject] = useState(false);
  // const [project, setProject] = useState(true);

  if (project) {
    return (
      <div>
        <Navbar_Servee />
        <MainComponentProject />
      </div>
    );
  }

  return (
    <div>
      <Navbar_Servee />
      <MainComponent />
    </div>
  );
};

export default ServerFeedback;
