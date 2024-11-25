import React from 'react';

import CardSkill from "./CardSkill";

import HtmlIcon from "../../icons/skill/front/HtmlIcon";
import CssIcon from "../../icons/skill/front/CssIcon";
import ScssIcon from "../../icons/skill/front/ScssIcon";
import JsIcon from "../../icons/skill/front/JsIcon";
import ReactIcon from "../../icons/skill/front/ReactIcon";

const FrontCard = [
  {color:'#E34C2B',label: 'html', icon : <HtmlIcon/>,value :80},
  {color:'#3c99dc',label: 'css', icon : <CssIcon/>,value :80},
  {color:'#cc6699',label: 'scss', icon : <ScssIcon/>,value :60},
  {color:'#f0db4f',label: 'js', icon : <JsIcon/>,value :50},
  {color:'#61dbfb',label: 'react', icon : <ReactIcon/>,value :10},
]
const FrontSkill = () => {
  return (
      <div id={'front-tech'} className={'tech-content'}>
        {FrontCard.map((item,index)=>(
            <CardSkill key={index} color={item.color} label={item.label} icon={item.icon} value={item.value}/>
        ))}
      </div>
  );
};

export default FrontSkill;