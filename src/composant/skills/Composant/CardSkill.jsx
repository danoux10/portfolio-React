import React from 'react';

import '../../../style/composant/skills/CardSkill.css';
import Gauge from './Gauge';

const CardSkill = ({label,icon,value}) => {
  return (
      <div className={'skill-card'}>
        <h3 className={'title-card'}>
          {label}
        </h3>
        {icon}
        <Gauge value={value}/>
      </div>
  );
};

export default CardSkill;