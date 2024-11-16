import React, { useRef, useEffect } from 'react';

const Gauge = ({ value }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const radius = canvas.height / 2;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(radius, radius, radius - 10, 0, Math.PI * 2);
    context.strokeStyle = '#e6e6e6';
    context.lineWidth = 10;
    context.stroke();

    const angle = (value / 100) * Math.PI * 2;
    context.beginPath();
    context.arc(radius, radius, radius - 10, 0, angle);
    context.strokeStyle = 'blue';
    context.lineWidth = 10;
    context.stroke();
  }, [value]);

  return <canvas ref={canvasRef} width={200} height={100} />;
};

export default Gauge;