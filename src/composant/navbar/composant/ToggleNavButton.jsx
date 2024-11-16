import React from 'react';

import '../../../style/composant/navbar/ToggleNav.css';

import ToggleNavIcon from "../../icons/navbar/ToggleNavIcon";
const ToggleNavButton = ({isActive, toggleClass}) => {
  return (
      <div id={'navbar-toggle'} onClick={toggleClass} className={isActive ? 'active' : ''}>
        <ToggleNavIcon/>
      </div>
  );
};

export default ToggleNavButton;