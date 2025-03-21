import React from 'react';

import CardSkill from "./CardSkill";

import PhpIcon from "../../icons/Skill/back/PhpIcon";
import MysqlIcon from "../../icons/Skill/back/MysqlIcon";
import SymfonyIcon from "../../icons/Skill/back/SymfonyIcon";

const BackCard = [
    {color:'#787cb5',label: 'php', icon : <PhpIcon/>,value :80},
    {color:'#f29111',label:'mysql', icon : <MysqlIcon/>,value :80},
    {color:'#1a171b',label:'symfony', icon : <SymfonyIcon/>,value :10},
]

const BackTech = () => {
  return (
      <div id={"back-tech"} className={'tech-content'}>
        {BackCard.map((item, index)=>(
            <CardSkill key={index} color={item.color} label={item.label} icon={item.icon} value={item.value}/>
        ))}
      </div>
  );
};

export default BackTech;
