import React from 'react';

import '../../../style/composant/navbar/ToggleTheme.css';

import ThemeIconD from "../../icons/navbar/ThemeIconD";
import ThemeIconL from "../../icons/navbar/ThemeIconL";
const ToggleTheme = () => {
  return (
      <div id={'theme-toggle'} className={'toggle-btn'}>
        <span className={'icon-container'}>
          <ThemeIconD/>
          <ThemeIconL/>
        </span>
      </div>
  );
};

export default ToggleTheme;