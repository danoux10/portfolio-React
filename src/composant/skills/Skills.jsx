import React from 'react';

import '../../style/composant/skills/Skills.css'

import FrontTech from "./composant/FrontTech";
import BackTech from "./composant/BackTech";
const Skills = () => {
  return (
      <article id={'skills'}>
        <h2>Compétences</h2>
        <section>
          <FrontTech/>
          <BackTech/>
        </section>
      </article>
  );
};

export default Skills;
