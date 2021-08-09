import React, { useState } from 'react';

import Navbar_Servee from '../../../Navbar_Servee';
import MainComponent from './ServeeMainComponent';
import MainComponentProject from './ServeeMainComponentProject';

const ServeeFeedback = () => {
  const [project, setProject] = useState(true);

  if (project) {
    return (
      <div>
        <Navbar_Servee />
        <MainComponent />
      </div>
    );
  }

  return (
    <div>
      <Navbar_Servee />
      <MainComponentProject />
    </div>
  );
};

export default ServeeFeedback;
