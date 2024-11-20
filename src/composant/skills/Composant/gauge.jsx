import React, { useRef, useEffect, useState } from 'react';
import {useTheme} from "../../themeProvider";

const Gauge = ({ value }) => {
  const {theme} = useTheme();
  const canvasRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const targetValue = value;
    const duration = 1000;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const newValue = Math.floor(progress * targetValue);

      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

  }, [value]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const progressAngle = (currentValue / 100) * 2 * Math.PI;
    const themeClass = theme === 'dark-mode' ? 'dark-mode' : 'light-mode';
    const strokeColor = getComputedStyle(document.querySelector(`.${themeClass}`)).getPropertyValue('--theme-color').trim();
    console.log(strokeColor);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 10, -Math.PI / 2, -Math.PI / 2 + progressAngle);
    context.strokeStyle = strokeColor;
    context.lineWidth = 20;
    context.stroke();

    context.font = '24px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle =  strokeColor;

    context.fillText('~'+value+'%',canvas.width/2, canvas.height/2);
  }, [currentValue,theme]);


  return <canvas ref={canvasRef} width={200} height={200}/>;
};

export default Gauge;