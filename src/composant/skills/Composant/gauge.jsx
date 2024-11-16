import React,{useRef,useEffect} from 'react';

const gauge = ({data}) => {
  const canvasRef = canvasRef.current;

  useEffect(() => {
    return () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');


    };
  }, [data]);


  return (
      <canvas ref={canvasRef} />
  );
};

export default gauge;
