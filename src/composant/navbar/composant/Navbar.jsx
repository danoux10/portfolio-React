import React from 'react';

import '../../../style/composant/navbar/Navbar.css'

import LinkNav from "./LinkNav";

import SkillIcon from "../../icons/navbar/SkillIcon";
import ProjectIcon from "../../icons/navbar/ProjectIcon";

const Navbar = () => {
  return (
      <nav id={'navbar'}>
        <LinkNav url={'#skills'} icon={<SkillIcon/>} label={'Compétences'}/>
        <LinkNav url={'#projects'} icon={<ProjectIcon/>} label={'Projets'}/>
      </nav>
  );
};

export default Navbar;