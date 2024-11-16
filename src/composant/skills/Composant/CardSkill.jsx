import React from 'react';

import '../../../style/composant/skills/CardSkill.css';

const CardSkill = ({label,icon,data}) => {
  return (
      <div className={'skill-card'}>
        <h3 className={'title-card'}>
          {label}
        </h3>
        {icon}
        <canvas className={'gauge'} width={'200'} height={'200'} data-progress={data}></canvas>
      </div>
  );
};

export default CardSkill;