import React from 'react';

import '../../style/composant/skills/Skills.css'

import FrontTech from "./Composant/FrontTech";
import BackTech from "./Composant/BackTech";
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
