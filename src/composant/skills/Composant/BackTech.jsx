import React from 'react';

import CardSkill from "./CardSkill";

import PhpIcon from "../../icons/skill/back/PhpIcon";
import MysqlIcon from "../../icons/skill/back/MysqlIcon";
import SymfonyIcon from "../../icons/skill/back/SymfonyIcon";

const BackCard = [
    {label: 'php', icon : <PhpIcon/>,data :'80%'},
    {label:'mysql', icon : <MysqlIcon/>,data :'80%'},
    {label:'symfony', icon : <SymfonyIcon/>,data :'10%'},
]

const BackTech = () => {
  return (
      <div id={"back-tech"} className={'tech-content'}>
        {BackCard.map((item, index)=>(
            <CardSkill key={index} label={item.label} icon={item.icon} data={item.data}/>
        ))}
      </div>
  );
};

export default BackTech;
