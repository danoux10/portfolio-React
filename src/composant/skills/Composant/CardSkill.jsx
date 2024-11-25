import React from 'react';

import '../../../style/composant/skills/CardSkill.css';
import Gauge from './Gauge';

const CardSkill = ({color,label,icon,value}) => {
  const style ={
    '--color':color
  }
  return (
      <div className={'skill-card'} style={style}>
        <h3 className={'title-card'}>
          {label}
        </h3>
        {icon}
        <Gauge value={value}/>
      </div>
  );
};

export default CardSkill;