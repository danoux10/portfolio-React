import React from 'react';

import '../../style/composant/title/Title.css'

import ProfilePicture from '../../data/dany.png';
const Title = () => {
  return (
      <div id={'title'}>
        <span className={'profile-picture'}>
          <img src={ProfilePicture} alt={"photo de profile"}/>
        </span>
        <h1>Dany Barbe Portfolio</h1>
      </div>
  );
};

export default Title;