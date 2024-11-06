import React from 'react';

import '../../style/composant/projects/Projects.css';

import CardProject from "./composant/CardProject";

import Didierbarbe from '../../data/projet/didierBarbeEntreprise.PNG';
import DidierbarbeWp from '../../data/projet/didierBarbeEntrepriseWorldpress.PNG';
import ProjectBts from '../../data/projet/projetBts.PNG';
import Evaluation from '../../data/projet/evalHtml.PNG';
import Ecf from '../../data/projet/ECF.PNG';
import PortfolioV1 from '../../data/projet/portfolioV1.PNG';
import Block2 from '../../data/projet/bachelorBlock2.PNG';
import Hebdowin from '../../data/projet/hebdowin.PNG';
import Rankstat from '../../data/projet/rankStat.PNG';
import Goldcalc from '../../data/projet/goldCalc.PNG';
import Randomhero from '../../data/projet/randomHero.PNG';
import Block3 from '../../data/projet/bachelorBlock3.PNG';

const ProjectsData = [
  { name : "Didier Barbe Entreprise Version1",
    tech : ['html','css','js'],
    capture :Didierbarbe,
    lien : 'http://didierbarbe.danybarbe.ovh/',
    description : "J'apprenais le HTML, CSS et JS en autodidacte et pour cela, j'ai créé un site vitrine pour l'entreprise familiale, un projet réalisé avec un ami.",
    github : 'https://github.com/danoux10/entrepriseB'},
  { name : "didier barbe entreprise worldpress",
    tech : ['worldpress'],
    capture :DidierbarbeWp,
    lien : 'https://www.didierbarbeentreprise.com/',
    description : "Apprentissage de WordPress pour réaliser le site vitrine de l’entreprise familiale",},
  { name : "rucher connecter project de BTS",
    tech : ['html','css','js','php','mysql'],
    capture :ProjectBts,
    lien : 'http://projetbts.danybarbe.ovh/view/home.php',
    description : "Réalisation d'une interface web pour mon projet de fin d'études en BTS. Le but était de créer une interface où l'on pourrait gérer des ruches connectées, voir l'humidité, la température et le poids de la ruche sélectionnée. On peut aussi ajouter des ruches avec la localisation, etc.",
    github : 'https://github.com/danoux10/rebuild_BTS_PROJET'},
  { name : "évaluation html",
    tech : ['html','css','js'],
    capture :Didierbarbe,
    lien : 'http://evalhtml.danybarbe.ovh/page/home.php',
    description : "JRefonte du site de Didier Barbe Entreprise dans le cadre d'une évaluation pour le graduate chez Studi.",
    github : 'https://github.com/danoux10/Eval-html'},
  { name : "ECF",
    tech : ['html','css','js','php','mysql','tailwind'],
    capture :Ecf,
    lien : 'http://ecf.danybarbe.ovh/view/home.php',
    description : "Dans le cadre de la validation des acquis dans ma formation de graduate développeur full stack, j'ai dû réaliser un site pour une médiathèque. Il fallait, pour cela, pouvoir gérer les utilisateurs et les employés. Les employés pouvaient ajouter des livres, mais aussi voir les livres empruntés. Un utilisateur, lui, pouvait voir les livres et les emprunter.",
    github : 'https://github.com/danoux10/ECF-Barbe'},
  { name : "portfolio version 1",
    tech : ['html','css','js'],
    capture :PortfolioV1,
    lien : 'http://portfoliov1.danybarbe.ovh/',
    description : "Création de mon premier portfolio en vue de trouver un stage.",
    github : 'https://github.com/danoux10/portfolioV1/tree/master'},
  { name : "assurePlus bachelor block 2",
    tech : ['html','scss','js','php','mysql'],
    capture :Block2,
    lien : 'http://examblock2.danybarbe.ovh/',
    description : "Pour la validation du block 2 de ma formation de bachelor en développement d'applications web, j'ai réalisé un site pour une assurance auto qui permet, lors d'un accident, d'envoyer des photos et d'avoir les dépanneurs dans la zone.",
    github : 'https://github.com/danoux10/block_2_version_final'},
  { name : "Hebdowin (overwatch)",
    tech : ['html','scss','js','php','mysql'],
    capture :Hebdowin,
    lien : 'https://hebdowin.danybarbe.ovh/',
    description : "Ce site est fait pour calculer les wins par catégorie de personnage sur le jeu Overwatch. L'on peut créer son compte en utilisant son pseudo.",
    github : 'https://github.com/danoux10/HebdoWinV2'},
  { name : "rank stat (overwatch)",
    tech : ['html','scss','js','php','mysql'],
    capture :Rankstat,
    lien : 'http://rankstat.danybarbe.ovh/',
    description : "Ce site est conçu pour calculer les wins et les losses sur le jeu Overwatch pour les parties classées.",
    github : 'https://github.com/danoux10/rank_stat'},
  { name : "gold calc (overwatch)",
    tech : ['html','scss','js'],
    capture :Goldcalc,
    lien : 'http://goldcalc.danybarbe.ovh/',
    description : "Ce site est conçu pour calculer le nombre de parties classées à faire pour obtenir des skins d'arme sur Overwatch en fonction du rang",
    github : 'https://github.com/danoux10/GoldCalc'},
  { name : "random hero (overwath)",
    tech : ['html','scss','js'],
    capture :Randomhero,
    lien : 'http://randomhero.danybarbe.ovh/',
    description : "Ce site est conçu pour le jeu Overwatch et permet de choisir de façon aléatoire le héros à jouer en fonction de sa catégorie.",
    github : 'https://github.com/danoux10/randomHero'},
  { name : "bachelor block 3",
    tech : ['symfony','mysql'],
    capture :Block3,
    lien : 'http://examblock3.danybarbe.ovh/',
    description : "Dans le cadre de mon bachelor en développement d'applications web, j'ai dû concevoir un site de gestion de locations d'appartements pour une agence. Ce site permet d'ajouter des propriétaires, des locataires et des appartements, ainsi que de gérer les contrats de location",
    github : 'https://github.com/danoux10/block_3'},
  /*{ name : "",
    tech : ['','',''],
    capture :,
    lien : '',
    description : "",
    github : ''},*/
]

const Projects = () => {
  return (
      <article id={'projects'}>
        <h2>Projets</h2>
        <section>
          {ProjectsData.map((item,index)=>(
              <CardProject
                  key={index}
                  name={item.name}
                  tech={item.tech}
                  capture={item.capture}
                  lien={item.lien}
                  description={item.description}
                  github={item.github}
              />
          ))}
        </section>
      </article>
  );
};

export default Projects;
