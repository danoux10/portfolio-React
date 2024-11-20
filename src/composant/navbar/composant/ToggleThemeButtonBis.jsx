import React,{useState} from 'react';

import '../../../style/composant/navbar/ToggleTheme.css';

import ThemeIconD from "../../icons/navbar/ThemeIconD";
import ThemeIconL from "../../icons/navbar/ThemeIconL";
const ToggleThemeButtonBis = () => {
  const [theme,setTheme] = useState('dark-mode');
  const [isActive,setIsActive] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    setTheme(newTheme);
    setIsActive(!isActive);
    document.body.className = newTheme;
  }
  return (
      <div id={'theme-toggle'} onClick={toggleTheme} className={`toggle-btn ${isActive ? 'active' : ''}`}>
        <span className={'icon-container'}>
          <ThemeIconD/>
          <ThemeIconL/>
        </span>
      </div>
  );
};

export default ToggleThemeButtonBis;