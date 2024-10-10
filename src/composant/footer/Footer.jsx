import React from 'react';

import '../../style/composant/footer/Footer.css'

import LinkFoot from "./composant/LinkFoot";

import PhoneIcon from "../icons/footer/PhoneIcon";
import MailIcon from "../icons/footer/MailIcon";
import CvIcon from "../icons/footer/CvIcon";
import LinkedinIcon from "../icons/footer/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";

const Footer = () => {
  return (
      <footer id={'footbar'}>
        <LinkFoot url={'tel:+33615245156'} icon={<PhoneIcon/>} label={"0615245156"}/>
        <LinkFoot url={'mailto:monEmail@mail.fr'} icon={<MailIcon/>} label={"monEmain@email.fr"}/>
        <LinkFoot url={'../../src/data/cv.pdf'} icon={<CvIcon/>} label={"mon CV"}/>
        <LinkFoot url={""} icon={<LinkedinIcon/>}/>
        <LinkFoot url={""} icon={<GithubIcon/>}/>
      </footer>
  );
};

export default Footer;