import React, { useRef, useEffect, useState } from 'react';

const Gauge = ({ value,size }) => {
  const canvasRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const targetValue = value; // Valeur cible
    const duration = 1000; // Durée de l'animation en millisecondes
    const startTime = performance.now(); // Temps de début de l'animation

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime; // Temps écoulé
      const progress = Math.min(elapsedTime / duration, 1); // Progression de l'animation (0 à 1)
      const newValue = Math.floor(progress * targetValue); // Nouvelle valeur à dessiner

      setCurrentValue(newValue); // Mettre à jour la valeur actuelle

      if (progress < 1) {
        requestAnimationFrame(animate); // Continuer l'animation
      }
    };

    requestAnimationFrame(animate); // Démarrer l'animation

  }, [value]); // Exécutez cet effet chaque fois que la valeur change


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const progressAngle = (currentValue / 100) * 2 * Math.PI;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2 - 10, -Math.PI / 2, -Math.PI / 2 + progressAngle);
    context.strokeStyle = '#e6e6e6';
    context.lineWidth = 20;
    context.stroke();

    context.font = '24px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    context.fillText('~'+value+'%',canvas.width/2, canvas.height/2);
  }, [currentValue, size]); // Redessiner chaque fois que currentValue change


  return <canvas ref={canvasRef} width={size} height={size} />;
};

export default Gauge;