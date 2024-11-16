import React, {useState} from 'react';

import '../../style/composant/navbar/Header.css';

import ToggleNavButton from "./composant/ToggleNavButton";
import ToggleThemeButton from "./composant/ToggleThemeButton";
import Navbar from "./composant/Navbar";
const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const navToggle = () =>{
    setIsActive(!isActive)
  }

  return (
      <header id={'header-content'} className={isActive ? 'close':''}>
        <ToggleNavButton isActive={isActive} toggleClass={navToggle}/>
        <ToggleThemeButton/>
        <Navbar/>
      </header>
  );
};

export default Header;
