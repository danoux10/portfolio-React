import React from 'react';

import '../../style/composant/navbar/Navbar.css';

import ToggleNav from "./composant/ToggleNav";
import ToggleTheme from "./composant/ToggleTheme";
import LinkNav from "./composant/LinkNav";

import SkillIcon from "../icons/navbar/SkillIcon";
import ProjectIcon from "../icons/navbar/ProjectIcon";
const Navbar = () => {
  return (
      <header id={'nav-content'}>
        <ToggleNav/>
        <ToggleTheme/>

        <nav id={'navbar'}>
          <LinkNav target={'#skill'} icon={<SkillIcon/>} label={'Compétences'}/>
          <LinkNav target={'#project'} icon={<ProjectIcon/>} label={'Projets'}/>
        </nav>

      </header>
  );
};

export default Navbar;
