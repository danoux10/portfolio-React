import React from 'react';
import {useTheme} from "../../themeProvider";

import '../../../style/composant/navbar/ToggleTheme.css';

import ThemeIconD from "../../icons/navbar/ThemeIconD";
import ThemeIconL from "../../icons/navbar/ThemeIconL";
const ToggleThemeButton = () => {
  const {theme, toggleTheme} = useTheme();

  return (
      <div id={'theme-toggle'} onClick={toggleTheme} className={`toggle-btn ${theme === 'dark-mode'?'':'active'}`}>
        <span className={'icon-container'}>
          <ThemeIconD/>
          <ThemeIconL/>
        </span>
      </div>
  );
};

export default ToggleThemeButton;