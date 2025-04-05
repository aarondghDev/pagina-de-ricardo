import React, { useRef, useEffect, useState } from "react";
import { nextImage, prevImage, updateCarousel } from "./carouselLogic";
import "./carrusel.css";
import antes1 from '../imagenes/antes1.jpg';
import antes2 from '../imagenes/antes2.jpg';
import despues1 from '../imagenes/despues1.jpg';
import despues2 from '../imagenes/despues2.jpg';

const Carousel = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null); // Referencia para el intervalo
  const [index, setIndex] = useState(0);
  const maxMoves = 2;
  const intervalTime = 7000;

  // Función para reiniciar el intervalo
  const restartInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setIndex((prev) => nextImage(prev, maxMoves));
    }, intervalTime);
  };

  useEffect(() => {
    restartInterval(); // Inicia el intervalo al montar el componente

    return () => clearInterval(intervalRef.current); // Limpia el intervalo al desmontar
  }, []);

  useEffect(() => {
    updateCarousel(carouselRef, index);
    restartInterval(); // Reinicia el intervalo en cada cambio de imagen
  }, [index]);

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel" ref={carouselRef}>
          <img src={antes1} alt="Imagen 1" />
          <img src={despues1} alt="Imagen 2" />
          <img src={antes2} alt="Imagen 3" />
          <img src={despues2} alt="Imagen 4" />
          {/* <img src="https://es.onlyfresh.com/cdn/shop/articles/dog-g6aa17498a_1920.jpg?v=1659454762&width=1100" alt="Imagen 5" />
          <img src="https://es.onlyfresh.com/cdn/shop/articles/dog-g6aa17498a_1920.jpg?v=1659454762&width=1100" alt="Imagen 6" /> */}
        </div>
      </div>
      <div className="caja1">
        <button onClick={() => setIndex((prev) => prevImage(prev, maxMoves))}>
          ←
        </button>
        <button onClick={() => setIndex((prev) => nextImage(prev, maxMoves))}>
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
