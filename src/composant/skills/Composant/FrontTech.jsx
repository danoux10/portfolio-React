import React from 'react';

import CardSkill from "./CardSkill";

import HtmlIcon from "../../icons/skill/front/HtmlIcon";
import CssIcon from "../../icons/skill/front/CssIcon";
import JsIcon from "../../icons/skill/front/JsIcon";
import ReactIcon from "../../icons/skill/front/ReactIcon";

const FrontCard = [
  {label: 'html', icon : <HtmlIcon/>,value :80},
  {label: 'css/scss', icon : <CssIcon/>,value :80},
  {label: 'js', icon : <JsIcon/>,value :50},
  {label: 'react', icon : <ReactIcon/>,value :10},
]
const FrontSkill = () => {
  return (
      <div id={'front-tech'} className={'tech-content'}>
        {FrontCard.map((item,index)=>(
            <CardSkill key={index} label={item.label} icon={item.icon} value={item.value}/>
        ))}
      </div>
  );
};

export default FrontSkill;