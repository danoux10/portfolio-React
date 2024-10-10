import React from 'react';

import '../../../style/composant/navbar/LinkNav.css';

const LinkNav = ({url,icon,label}) => {
  return (
      <a href={url}>
        {icon}
        <p>{label}</p>
      </a>
  );
};

export default LinkNav;