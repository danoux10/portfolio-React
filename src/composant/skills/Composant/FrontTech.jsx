import React from 'react';

import CardSkill from "./CardSkill";

import HtmlIcon from "../../icons/Skill/front/HtmlIcon";
import CssIcon from "../../icons/Skill/front/CssIcon";
import JsIcon from "../../icons/Skill/front/JsIcon";
import ReactIcon from "../../icons/Skill/front/ReactIcon";

const FrontCard = [
  {color: '#F06529', label: 'html', icon: <HtmlIcon/>, value: 80},
  {color: '#CC6699', label: 'css/scss', icon: <CssIcon/>, value: 80},
  {color: '#F0DB4F', label: 'js', icon: <JsIcon/>, value: 50},
  {color: '#61DBFB', label: 'react', icon: <ReactIcon/>, value: 10},
]
const FrontSkill = () => {
  return (
    <div id={'front-tech'} className={'tech-content'}>
      {FrontCard.map((item, index) => (
        <CardSkill key={index} color={item.color} label={item.label} icon={item.icon} value={item.value}/>
      ))}
    </div>
  );
};

export default FrontSkill;