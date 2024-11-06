import React from 'react';

import '../../style/composant/navbar/Header.css';

import ToggleNav from "./composant/ToggleNav";
import ToggleTheme from "./composant/ToggleTheme";
import Navbar from "./composant/Navbar";
const Header = () => {
  return (
      <header id={'header-content'}>
        <ToggleNav/>
        <ToggleTheme/>
        <Navbar/>
      </header>
  );
};

export default Header;
