import React from 'react';

import '../../style/composant/test/test.css';

import Card from "./Card";

import HtmlIcon from "../icons/skill/front/HtmlIcon";


const data = [
  {name: 'html', icon: <HtmlIcon />, value: 80, size: 200},
  // Add more data for other skills
];
const Test = () => {
  return (
      <article>
        <h2>Coucou je suis test</h2>
        {data.map((item, index) => (
            <Card
                key={index}
                name={item.name}
                icon={item.icon}
                value={item.value}
                size={item.size}
            />
        ))}
      </article>
  );
};

export default Test;
