import React from 'react';

import '../../../style/composant/projects/CardProject.css';

import LinkIcon from "../../icons/LinkIcon";
import GithubIcon from "../../icons/GithubIcon";

const CardProject = ({name,tech,capture,lien,description,github}) => {
  return (
      <div className={'project-card'}>
        <header className={'header-card'}>
          <h3>{name}</h3>
        </header>

        <ul className={'tech-used'}>
          {tech.map((item, index) =>(
              <li key={index}>{item}</li>
          ))}
        </ul>

        <aside className={'project-view'}>
          <img src={capture} alt="capture du site"/>
        </aside>

        <div className={'paragraph-content'}>
          <p>{description}</p>
        </div>

        <footer className={'foot-card'}>
          <a href={lien} target={'_blank'}>
            <LinkIcon/>
          </a>

          {github && <a href={github} target={'_blank'}>{<GithubIcon/>}</a>}
        </footer>
      </div>
  );
};

export default CardProject;
